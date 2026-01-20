import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const test: Snippet = {
  key: 'test',
  prefix: 't',
  body: [`test('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates a test block',
};

const testOnly: Snippet = {
  key: 'test.only',
  prefix: 'to',
  body: [`test.only('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates a test block that runs only',
};

const testSkip: Snippet = {
  key: 'test.skip',
  prefix: 'ts',
  body: [`test.skip('\${1:${Placeholders.Should}}', () => {`, '\t$0', '})'],
  description: 'creates a test block that will be skipped',
};

const testTodo: Snippet = {
  key: 'test.todo',
  prefix: 'ttd',
  body: [`test.todo('\${0:${Placeholders.Should}}')`],
  description: 'creates a test placeholder',
};

const testAsync: Snippet = {
  key: 'test:async',
  prefix: 'ta',
  body: [`test('\${1:${Placeholders.Should}}', async () => {`, '\t$0', '})'],
  description: 'creates an test block with async callback function',
};

export default [test, testOnly, testSkip, testTodo, testAsync];
