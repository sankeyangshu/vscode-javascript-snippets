import { generateSnippets } from './utils';
import generatedJavascriptSnippets from './snippets/javascript.json';
import generatedTypescriptSnippets from './snippets/typescript.json';
import consoleSnippets from './sourceSnippets/console';
import importSnippets from './sourceSnippets/imports';
import functionSnippets from './sourceSnippets/function';
import othersSnippets from './sourceSnippets/others';
import typescript from './sourceSnippets/typescript';

/**
 * javascript 代码片段集合
 */
const javascriptSnippets = [
  ...consoleSnippets,
  ...importSnippets,
  ...functionSnippets,
  ...othersSnippets,
];

/**
 * typescript 代码片段集合
 */
const typescriptSnippets = [
  ...consoleSnippets,
  ...importSnippets,
  ...functionSnippets,
  ...othersSnippets,
  ...typescript,
];

export async function activate() {
  if (JSON.stringify(generatedJavascriptSnippets).length < 10) {
    await generateSnippets(javascriptSnippets);
  }

  if (JSON.stringify(generatedTypescriptSnippets).length < 10) {
    await generateSnippets(typescriptSnippets, true);
  }
}

export function deactivate() {}
