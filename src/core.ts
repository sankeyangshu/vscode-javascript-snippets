import type { Disposable, ExtensionContext } from 'vscode';
import type { ConfigCache, SnippetDefinition } from './types';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { CompletionItem, CompletionItemKind, languages, MarkdownString, SnippetString, window, workspace } from 'vscode';
import * as meta from './generated/meta';

/**
 * 代码片段管理
 */
export class SnippetManager {
  private context: ExtensionContext; // VS Code 扩展上下文
  private registeredCompletions: Map<string, Disposable> = new Map(); // 已注册的代码提示提供器
  private cachedSnippets: Map<string, SnippetDefinition[]> = new Map(); // 代码片段缓存，按框架分类存储
  private cachedConfig: ConfigCache = {
    enabledFrameworks: [],
    lastUpdateTime: 0,
    react: {
      languageScopes: [],
      importReactOnTop: false,
    },
    vue: {
      languageScopes: [],
      uniappCodeSnippets: true,
      vuexCodeSnippets: false,
      useTemplateSnippets: [],
    },
  }; // 配置缓存

  constructor(context: ExtensionContext) {
    this.context = context;
  }

  public init() {
    // 1. 更新配置缓存
    this.updateConfigCache();
    // 2. 预加载所有代码片段到内存
    this.preloadSnippets();
    // 3. 注册代码片段提供器
    this.registerCompletionProvider();
    // 4. 监听配置变化
    this.watchConfigChanges();
  }

  /**
   * 更新配置缓存
   */
  private updateConfigCache() {
    // 启用的框架列表
    this.cachedConfig.enabledFrameworks = workspace
      .getConfiguration()
      .get(meta.configs.frameworkEnabled.key, meta.configs.frameworkEnabled.default);

    // React 配置
    const reactLanguageScopes = workspace
      .getConfiguration()
      .get(meta.configs.reactLanguageScopes.key, meta.configs.reactLanguageScopes.default);
    this.cachedConfig.react.languageScopes = reactLanguageScopes.split(',').map((s) => s.trim());

    this.cachedConfig.react.importReactOnTop = workspace
      .getConfiguration()
      .get(meta.configs.reactImportReactOnTop.key, meta.configs.reactImportReactOnTop.default);

    // Vue 配置
    const vueLanguageScopes = workspace
      .getConfiguration()
      .get(meta.configs.vueLanguageScopes.key, meta.configs.vueLanguageScopes.default);
    this.cachedConfig.vue.languageScopes = vueLanguageScopes.split(',').map((s) => s.trim());

    this.cachedConfig.vue.uniappCodeSnippets = workspace
      .getConfiguration()
      .get(meta.configs.vueUniappCodeSnippets.key, meta.configs.vueUniappCodeSnippets.default);

    this.cachedConfig.vue.vuexCodeSnippets = workspace
      .getConfiguration()
      .get(meta.configs.vueVuexCodeSnippets.key, meta.configs.vueVuexCodeSnippets.default);

    this.cachedConfig.vue.useTemplateSnippets = workspace
      .getConfiguration()
      .get(meta.configs.vueUseTemplateSnippets.key, meta.configs.vueUseTemplateSnippets.default);

    // 最后更新时间
    this.cachedConfig.lastUpdateTime = Date.now();
  }

  /**
   * 预加载所有代码片段到内存
   */
  private preloadSnippets() {
    // 获取代码片段目录路径
    const snippetsPath = path.join(this.context.extensionPath, 'dist', 'snippets');

    // 需要加载的框架列表 - common默认是js/ts
    const frameworks = ['common', 'vue', 'react', 'nest', 'vitest'];

    // 遍历每个框架，加载对应的代码片段文件
    frameworks.forEach((item) => {
      const snippetFile = path.join(snippetsPath, `${item}.json`);

      // 检查文件是否存在
      if (existsSync(snippetFile)) {
        try {
          // 读取文件内容
          const content = readFileSync(snippetFile, 'utf-8');
          // 解析 JSON
          const snippets = JSON.parse(content) as Record<string, SnippetDefinition>;
          // 将代码片段存储到缓存中（转换为数组）
          this.cachedSnippets.set(item, Object.values(snippets));
        } catch (error) {
          console.error(`❌ Failed to load snippets for ${item}:`, error);
        }
      } else {
        console.warn(`⚠️ Snippet file not found: ${snippetFile}`);
      }
    });
  }

  /**
   * 注册代码片段提供器
   */
  private registerCompletionProvider() {
    // 注册代码提示提供器
    const provider = languages.registerCompletionItemProvider(
      ['javascript', 'typescript', 'javascriptreact', 'typescriptreact', 'vue', 'html'],
      {
        provideCompletionItems: (
          document: { languageId: string },
        ) => {
          const items: CompletionItem[] = [];
          const languageId = document.languageId;

          // 使用缓存的配置，避免频繁读取
          const enabledFrameworks = this.cachedConfig.enabledFrameworks;

          // JavaScript 和 TypeScript 始终启用（加载 common）
          if (languageId === 'javascript') {
            this.addSnippetsToItems(items, 'common');
          }
          if (languageId === 'typescript') {
            this.addSnippetsToItems(items, 'common');
          }

          // Vue
          if (
            languageId === 'vue'
            && enabledFrameworks.includes('vue')
            && this.cachedConfig.vue.languageScopes.includes(languageId)
          ) {
            this.addSnippetsToItems(items, 'vue');
          }

          // React
          if (
            (languageId === 'javascriptreact' || languageId === 'typescriptreact')
            && enabledFrameworks.includes('react')
            && this.cachedConfig.react.languageScopes.includes(languageId)
          ) {
            this.addSnippetsToItems(items, 'react');
          }

          // NestJS
          if (languageId === 'typescript' && enabledFrameworks.includes('nest')) {
            this.addSnippetsToItems(items, 'nest');
          }

          // Vitest
          if (
            (languageId === 'javascript' || languageId === 'typescript')
            && enabledFrameworks.includes('vitest')
          ) {
            this.addSnippetsToItems(items, 'vitest');
          }

          return items;
        },
      },
    );

    // 将提供器存储到 Map 中，方便后续清理
    this.registeredCompletions.set('main', provider);
    // 将提供器添加到扩展上下文的订阅列表中，窗口关闭时会自动清理
    this.context.subscriptions.push(provider);
  }

  /**
   * 监听配置变化
   * 当用户修改配置时，更新缓存并通知用户
   */
  private watchConfigChanges() {
    const configChangeListener = workspace.onDidChangeConfiguration((e) => {
      let configChanged = false;

      // 检查所有配置项是否发生变化
      const configKeys: meta.ConfigKey[] = [
        meta.configs.frameworkEnabled.key,
        meta.configs.reactLanguageScopes.key,
        meta.configs.reactImportReactOnTop.key,
        meta.configs.vueLanguageScopes.key,
        meta.configs.vueUniappCodeSnippets.key,
        meta.configs.vueVuexCodeSnippets.key,
        meta.configs.vueUseTemplateSnippets.key,
      ];

      for (const key of configKeys) {
        if (e.affectsConfiguration(key)) {
          configChanged = true;
          break;
        }
      }

      // 如果配置发生了变化，更新缓存并通知用户
      if (configChanged) {
        // 更新配置缓存
        this.updateConfigCache();
        // 获取更新后的框架列表
        const enabledFrameworks = this.cachedConfig.enabledFrameworks;
        // 显示通知，告知用户配置已更新
        window.showInformationMessage(`Snippet config updated! Enabled frameworks: ${enabledFrameworks.join(', ')}`);
      }
    });

    // 将监听器添加到扩展上下文的订阅列表中，窗口关闭时会自动清理
    this.context.subscriptions.push(configChangeListener);
  }

  /**
   * 将指定框架的代码片段添加到代码提示列表中
   * @param items 代码提示项列表
   * @param framework 框架名称
   */
  private addSnippetsToItems(items: CompletionItem[], framework: string): void {
    // 从缓存中获取该框架的代码片段
    const snippets = this.cachedSnippets.get(framework);

    // 如果没有找到代码片段，直接返回
    if (!snippets)
      return;

    // 遍历每个代码片段，创建对应的 CompletionItem
    snippets.forEach((snippet) => {
      // 获取代码片段的前缀
      const prefix = typeof snippet.prefix === 'string' ? snippet.prefix : snippet.prefix[0];

      // 如果是 Vue 框架，需要根据配置过滤
      if (framework === 'vue') {
        // 过滤 uniapp 代码片段
        if (!this.cachedConfig.vue.uniappCodeSnippets && prefix.startsWith('uni')) {
          return;
        }

        // 过滤 vuex 代码片段
        if (!this.cachedConfig.vue.vuexCodeSnippets && prefix.startsWith('vuex')) {
          return;
        }

        // 过滤模板代码片段 - 只显示在 useTemplateSnippets 列表中的模板片段
        const templatePrefixes = ['vinit', 'vbase', 'vts'];
        const isTemplateSnippet = templatePrefixes.some((tp) => prefix.startsWith(tp));

        if (isTemplateSnippet && !this.cachedConfig.vue.useTemplateSnippets.includes(prefix)) {
          return; // 跳过不在列表中的模板片段
        }
      }

      // 创建代码提示项
      const item = new CompletionItem(
        prefix,
        CompletionItemKind.Snippet, // 类型为代码片段
      );

      // 设置插入文本（使用 SnippetString 支持占位符）
      let body = snippet.body.join('\n');

      // 如果是 React 框架且配置了 importReactOnTop，在组件顶部添加 React 导入
      if (framework === 'react' && this.cachedConfig.react.importReactOnTop) {
        // 检查是否是组件片段（包含 export/function/const/class 且包含 JSX）
        const isComponent = (body.includes('export') || body.includes('function') || body.includes('const'))
          && (body.includes('return (') || body.includes('<'));

        if (isComponent && !body.includes('import React')) {
          // 在顶部添加 React 导入
          body = `import React from 'react';\n\n${body}`;
        }
      }

      item.insertText = new SnippetString(body);
      // 设置文档说明
      item.documentation = new MarkdownString(snippet.description ?? '');
      // 添加到代码提示列表
      items.push(item);
    });
  }
}
