import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const exportType: Snippet = {
  key: 'export.type',
  prefix: 'etp',
  body: [`export type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Export type',
};

const exportInterface: Snippet = {
  key: 'export.interface',
  prefix: 'eint',
  body: [`export interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Export interface',
};

const typeSnippet: Snippet = {
  key: 'type',
  prefix: 'tp',
  body: [`type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Create type',
};

const interfaceSnippet: Snippet = {
  key: 'interface',
  prefix: 'int',
  body: [`interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Create interface',
};

export default [exportType, exportInterface, typeSnippet, interfaceSnippet];
