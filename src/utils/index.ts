import { readFile, writeFile } from 'fs';
import { SnippetCollectionType, SnippetType } from '../types';
import path from 'path'; // 引入 path 模块

/**
 * 获取代码片段集合
 * @param list 代码片段数组
 * @param isTS 是否是 TS 类型
 * @return Javascript 代码片段集合
 */
export const getSnippets = (list: SnippetType[], isTS?: boolean) => {
  const scope = isTS
    ? 'javascript,javascriptreact,typescript,typescriptreact'
    : 'javascript,javascriptreact';

  const snippets = list.reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      ...snippet,
      scope,
    });
    return acc;
  }, {} as SnippetCollectionType);

  return snippets;
};

/**
 * 拼接代码片段前缀
 * @param snippet 代码片段
 * @return 拼接后的代码片段
 */
export const normalizeSnippet = (snippet: SnippetType) => {
  const [primaryPrefix, ...prefix] =
    typeof snippet.prefix === 'string' ? [snippet.prefix] : snippet.prefix;

  let finalPrefix = [primaryPrefix];

  if (prefix && prefix.length > 0) {
    finalPrefix = [...finalPrefix, ...prefix];
  }

  return {
    ...snippet,
    prefix: finalPrefix.join('-'),
  };
};

/**
 * 格式化代码片段集合 - 判断是否是 TS 类型代码片段
 * @param snippets 代码片段集合
 * @param isTS 是否是 TS 类型
 * @return 格式化后的代码片段集合
 */
export const normalizeSnippets = (snippets: SnippetCollectionType, isTS?: boolean) => {
  const normalizedSnippets: SnippetCollectionType = {};

  // 遍历对象，判断是否是 TS 类型的代码片段
  Object.keys(snippets).forEach((key) => {
    normalizedSnippets[`${isTS ? '🟦' : '🟨'} ${key}`] = normalizeSnippet(snippets[key]);
  });

  return normalizedSnippets;
};

/**
 * 生成代码片段
 * @param list 代码片段数组
 * @param isTS 是否是 TS 类型
 */
export const generateSnippets = (list: SnippetType[], isTS?: boolean) => {
  return new Promise(() => {
    const snippetList = normalizeSnippets(getSnippets(list, isTS), isTS);

    // 要写入的文件路径
    const tPath = isTS ? '../src/snippets/typescript.json' : '../src/snippets/javascript.json';

    // 获取脚本文件所在的目录（dist 目录）
    const scriptDir = path.dirname(__filename);

    // 构建 snippets 目录下的 javascript.json 文件的路径
    const filePath = path.join(scriptDir, tPath);

    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      // 解析已有内容为 JSON 对象
      const existingContent = JSON.parse(data);

      // 合并新内容和已有内容
      const mergedContent = { ...existingContent, ...snippetList };

      // 将新内容写回文件
      return writeFile(filePath, JSON.stringify(mergedContent, null, 2), (error) => {
        if (error) {
          console.error(error);
        }
        return;
      });
    });
  });
};
