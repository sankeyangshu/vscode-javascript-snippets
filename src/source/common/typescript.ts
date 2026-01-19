import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const exportType: Snippet = {
  key: 'exportType',
  prefix: 'etp',
  body: [`export type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Export type',
};

const exportInterface: Snippet = {
  key: 'exportInterface',
  prefix: 'eint',
  body: [`export interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Export interface',
};

const typeSnippet: Snippet = {
  key: 'typeSnippet',
  prefix: 'tp',
  body: [`type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Create type',
};

const interfaceSnippet: Snippet = {
  key: 'interfaceSnippet',
  prefix: 'int',
  body: [`interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Create interface',
};

export default [exportType, exportInterface, typeSnippet, interfaceSnippet];
