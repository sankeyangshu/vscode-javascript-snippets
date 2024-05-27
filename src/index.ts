import { window } from 'vscode';
import { generateSnippets } from './utils';
import generatedSnippets from './snippets/javascript.json';

export async function activate() {
  if (JSON.stringify(generatedSnippets).length < 10) {
    await generateSnippets();
  }

  window.showInformationMessage('Hello');
}

export function deactivate() {}
