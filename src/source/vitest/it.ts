import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const it: Snippet = {
  key: 'it',
  prefix: ['i', 'it'],
  body: [`it('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates an it block',
};

const itOnly: Snippet = {
  key: 'it.only',
  prefix: 'io',
  body: [`it.only('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates an it block that runs only',
};

const itSkip: Snippet = {
  key: 'it.skip',
  prefix: 'is',
  body: [`it.skip('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates an it block that will be skipped',
};

const itTodo: Snippet = {
  key: 'it.todo',
  prefix: 'itd',
  body: [`it.todo('\${0:${Placeholders.Should}}')`],
  description: 'creates a test placeholder',
};

const itAsync: Snippet = {
  key: 'it:async',
  prefix: 'ia',
  body: [`it('\${1:${Placeholders.Should}}', async () => {`, '\t$0', '})'],
  description: 'creates an it block with async callback function',
};

export default [it, itOnly, itSkip, itTodo, itAsync];
