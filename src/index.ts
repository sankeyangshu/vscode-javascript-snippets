import { window } from 'vscode';
import { generateSnippets } from './utils';
import generatedJavascriptSnippets from './snippets/javascript.json';
import generatedTypescriptSnippets from './snippets/typescript.json';
import consoleSnippets from './sourceSnippets/console';

/**
 * javascript 代码片段集合
 */
const javascriptSnippets = [...consoleSnippets];

/**
 * typescript 代码片段集合
 */
const typescriptSnippets = [...consoleSnippets];

export async function activate() {
  if (JSON.stringify(generatedJavascriptSnippets).length < 10) {
    await generateSnippets(javascriptSnippets);
  }

  if (JSON.stringify(generatedTypescriptSnippets).length < 10) {
    await generateSnippets(typescriptSnippets, true);
  }

  window.showInformationMessage('Hello');
}

export function deactivate() {}
