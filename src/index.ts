import { generateSnippets } from './utils';
import consoleSnippets from './sourceSnippets/console';
import importSnippets from './sourceSnippets/imports';
import functionSnippets from './sourceSnippets/function';
import othersSnippets from './sourceSnippets/others';
import javascript from './sourceSnippets/javascript';
import typescript from './sourceSnippets/typescript';

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
