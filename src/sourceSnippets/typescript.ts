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

export default [exportType, exportInterface];
