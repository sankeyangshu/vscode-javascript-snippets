import consoleSnippets from './sourceSnippets/console';
import functionSnippets from './sourceSnippets/function';
import importSnippets from './sourceSnippets/imports';
import javascript from './sourceSnippets/javascript';
import othersSnippets from './sourceSnippets/others';
import typescript from './sourceSnippets/typescript';
import { generateSnippets } from './utils';

/**
 * javascript 代码片段集合
 */
const javascriptSnippets = [
  ...javascript,
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

export function activate() {
  generateSnippets(javascriptSnippets);

  generateSnippets(typescriptSnippets, true);
}

export function deactivate() {}
