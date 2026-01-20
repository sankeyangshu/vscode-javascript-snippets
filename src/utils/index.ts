import type { Snippet, SnippetCollection } from '../types';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/**
 * 获取代码片段集合
 * @param snippets 代码片段数组
 */
export function getSnippetCollection(snippets: Snippet[]): SnippetCollection {
  return snippets.reduce((acc, snippet) => {
    acc[snippet.key] = snippet;
    return acc;
  }, {} as SnippetCollection);
}

/**
 * 生成代码片段
 * @param snippets 代码片段数组
 * @param filename 文件名（如 'javascript.json'）
 */
export function generateSnippets(snippets: Snippet[], filename: string) {
  try {
    // 转换为代码片段集合对象
    const collection = getSnippetCollection(snippets);

    // 直接生成到 dist/snippets
    const outputPath = path.join(process.cwd(), 'dist', 'snippets', filename);

    // 监测文件是否存在，不存在则创建
    const outputDir = path.dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // 将对象序列化为 JSON 字符串并写入文件
    writeFileSync(
      outputPath,
      JSON.stringify(collection, null, 2),
      'utf-8',
    );

    // eslint-disable-next-line no-console
    console.log(`✅ Generated snippet file: ${outputPath}`);
  } catch (err) {
    console.error(`❌ Failed to generate snippet file: ${filename}`, err);
  }
}
