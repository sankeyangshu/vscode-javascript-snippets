import { Placeholders, SnippetType } from '../types';

const exportType: SnippetType = {
  key: 'exportType',
  prefix: 'exptp',
  body: [`export type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Export type',
};

const exportInterface: SnippetType = {
  key: 'exportInterface',
  prefix: 'expint',
  body: [`export interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Export interface',
};

const typeSnippet: SnippetType = {
  key: 'typeSnippet',
  prefix: 'ttp',
  body: [`type \${1:${Placeholders.TypeName}} = {\n\t$2\n}`],
  description: 'Create type',
};

const interfaceSnippet: SnippetType = {
  key: 'interfaceSnippet',
  prefix: 'intf',
  body: [`interface \${1:${Placeholders.TypeName}} {\n\t$2\n}`],
  description: 'Create interface',
};

export default [exportType, exportInterface, typeSnippet, interfaceSnippet];
