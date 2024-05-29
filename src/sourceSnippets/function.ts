import { Placeholders, SnippetType } from '../types';

const exportNamedVariable: SnippetType = {
  key: 'exportNamedVariable',
  prefix: 'econ',
  body: [`export const \${1:${Placeholders.Params}} = \${2:${Placeholders.Data}}`],
  description: 'Export named variable',
};

const exportNamedFunction: SnippetType = {
  key: 'exportNamedFunction',
  prefix: 'enf',
  body: [
    `export const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`,
  ],
  description: 'Export named function',
};

const exportFunction: SnippetType = {
  key: 'exportFunction',
  prefix: 'efun',
  body: [
    `export function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Export function',
};

const exportDefaultFunction: SnippetType = {
  key: 'exportDefaultFunction',
  prefix: 'edf',
  body: [`export default (\${1:${Placeholders.FunctionName}}) => {\${2:${Placeholders.Params}}}`],
  description: 'Export default function',
};

const exportDefaultNamedFunction: SnippetType = {
  key: 'exportDefaultNamedFunction',
  prefix: 'ednf',
  body: [
    `export default function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Export default named function',
};

const method: SnippetType = {
  key: 'method',
  prefix: 'met',
  body: [`\${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`],
  description: 'Creates a method inside a class',
};

const constructor: SnippetType = {
  key: 'constructor',
  prefix: 'con',
  body: [`constructor(\${1:${Placeholders.Params}}) {\n\t$0\n}`],
  description: 'Add default constructor in a class',
};

const exportClass: SnippetType = {
  key: 'exportClass',
  prefix: 'ecl',
  body: [`export default class \${1:${Placeholders.ClassName}} {\n\t$0\n}`],
  description: 'Export default class',
};

const exportClassExtends: SnippetType = {
  key: 'exportClassExtends',
  prefix: 'ece',
  body: [
    `export default class \${1:${Placeholders.ClassName}} extends \${2:${Placeholders.BaseClassName}} {\n\t$0\n}`,
  ],
  description: 'Export default class which extends a base one',
};

const propertyGet: SnippetType = {
  key: 'propertyGet',
  prefix: 'pge',
  body: [`get \${1:${Placeholders.FunctionName}}() {`, `  return this.$0`, '}'],
  description: 'Creates a getter property inside a class',
};

const propertySet: SnippetType = {
  key: 'propertySet',
  prefix: 'pse',
  body: [`set \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Value}}) {\n\t$0\n}`],
  description: 'Creates a setter property inside a class',
};

const anonymousFunction: SnippetType = {
  key: 'anonymousFunction',
  prefix: 'anfn',
  body: [`(\${1:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates an anonymous function',
};

const namedFunction: SnippetType = {
  key: 'namedFunction',
  prefix: 'nfn',
  body: [`const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates a named function',
};

export default [
  exportNamedVariable,
  exportNamedFunction,
  exportFunction,
  exportDefaultFunction,
  exportDefaultNamedFunction,
  method,
  constructor,
  exportClass,
  exportClassExtends,
  propertyGet,
  propertySet,
  anonymousFunction,
  namedFunction,
];
