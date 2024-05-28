import { Placeholders, SnippetType } from '../types';

const importSnippet: SnippetType = {
  key: 'import',
  prefix: 'imp',
  body: [`import \${2:${Placeholders.ModuleName}} from '\${1:${Placeholders.Module}}'`],
};

const importNoModuleName: SnippetType = {
  key: 'importNoModuleName',
  prefix: 'imn',
  body: [`import '\${1:${Placeholders.ModuleName}}'`],
};

const importDestructing: SnippetType = {
  key: 'importDestructing',
  prefix: 'imd',
  body: [`import { \${2:} } from '\${1:${Placeholders.Module}}'`],
};

const importEverything: SnippetType = {
  key: 'importEverything',
  prefix: 'ime',
  body: [`import * as \${2:${Placeholders.ModuleName}} from '\${1:${Placeholders.Module}}'`],
};

const importAs: SnippetType = {
  key: 'importAs',
  prefix: 'ima',
  body: [
    `import { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
};

const exportDefault: SnippetType = {
  key: 'exportDefault',
  prefix: 'exp',
  body: [`export default \${1:${Placeholders.Module}}`],
};

const exportDestructing: SnippetType = {
  key: 'exportDestructing',
  prefix: 'exd',
  body: [`export { \${2:} } from '\${1:${Placeholders.Module}}'`],
};

const exportAs: SnippetType = {
  key: 'exportAs',
  prefix: 'exa',
  body: [
    `export { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
};

export default [
  importAs,
  importDestructing,
  importEverything,
  importNoModuleName,
  importSnippet,
  exportAs,
  exportDestructing,
  exportDefault,
];
