import { window, commands } from 'vscode';
import { generateSnippets } from './utils';

export function activate() {
  console.log('first');
  generateSnippets();
}

export function deactivate() {}
