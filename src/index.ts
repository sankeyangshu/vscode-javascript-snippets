import type { ExtensionContext } from 'vscode';
import { SnippetManager } from './core';

export function activate(context: ExtensionContext) {
  // 创建代码片段管理器
  const snippetManager = new SnippetManager(context);
  // 初始化代码片段管理器
  snippetManager.init();
}

export function deactivate() {}
