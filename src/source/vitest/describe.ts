import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const describe: Snippet = {
  key: 'describe',
  prefix: ['d', 'desc'],
  body: [`describe('\${1:${Placeholders.Group}}', () => {`, '\t$0', '})'],
  description: 'creates a describe block',
};

const describeOnly: Snippet = {
  key: 'describe.only',
  prefix: 'do',
  body: [`describe.only('\${1:${Placeholders.Group}}', () => {`, '\t$0', '})'],
  description: 'creates a describe block that runs only',
};

const describeSkip: Snippet = {
  key: 'describe.skip',
  prefix: 'ds',
  body: [`describe.skip('\${1:${Placeholders.Group}}', () => {`, '\t$0', '})'],
  description: 'creates a describe block that will be skipped',
};

export default [describe, describeOnly, describeSkip];
