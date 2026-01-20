import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

// Import/Export snippets
const importSnippet: Snippet = {
  key: 'import',
  prefix: 'imp',
  body: [`import \${2:${Placeholders.ModuleName}} from '\${1:${Placeholders.Module}}'`],
  description: 'Import module',
};

const importNoModuleName: Snippet = {
  key: 'import.noModuleName',
  prefix: 'imn',
  body: [`import '\${1:${Placeholders.ModuleName}}'`],
  description: 'Import module without module name',
};

const importDestructing: Snippet = {
  key: 'import.destructing',
  prefix: 'imd',
  body: [`import { \${2:} } from '\${1:${Placeholders.Module}}'`],
  description: 'Import module with destructing',
};

const importEverything: Snippet = {
  key: 'import.everything',
  prefix: 'ime',
  body: [`import * as \${2:${Placeholders.ModuleName}} from '\${1:${Placeholders.Module}}'`],
  description: 'Import everything as alias',
};

const importAs: Snippet = {
  key: 'import.as',
  prefix: 'ima',
  body: [
    `import { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
  description: 'Import module as alias',
};

const exportDefault: Snippet = {
  key: 'export.default',
  prefix: 'exp',
  body: [`export default \${1:${Placeholders.Module}}`],
  description: 'Export default',
};

const exportDestructing: Snippet = {
  key: 'export.destructing',
  prefix: 'exd',
  body: [`export { \${2:} } from '\${1:${Placeholders.Module}}'`],
  description: 'Export with destructing',
};

const exportAs: Snippet = {
  key: 'export.as',
  prefix: 'exa',
  body: [
    `export { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
  description: 'Export as alias',
};

// Variable and function snippets
const exportNamedVariable: Snippet = {
  key: 'export.named.variable',
  prefix: 'econ',
  body: [`export const \${1:${Placeholders.Params}} = \${2:${Placeholders.Data}}`],
  description: 'Export named variable',
};

const exportNamedFunction: Snippet = {
  key: 'export.named.function',
  prefix: 'enf',
  body: [
    `export const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`,
  ],
  description: 'Export named function',
};

const exportFunction: Snippet = {
  key: 'export.function',
  prefix: 'efun',
  body: [
    `export function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Export function',
};

const exportDefaultFunction: Snippet = {
  key: 'export.default.function',
  prefix: 'edf',
  body: [`export default (\${1:${Placeholders.FunctionName}}) => {\${2:${Placeholders.Params}}}`],
  description: 'Export default function',
};

const exportDefaultNamedFunction: Snippet = {
  key: 'export.default.named.function',
  prefix: 'ednf',
  body: [
    `export default function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Export default named function',
};

const method: Snippet = {
  key: 'method',
  prefix: 'met',
  body: [`\${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`],
  description: 'Creates a method inside a class',
};

const constructor: Snippet = {
  key: 'constructor',
  prefix: 'con',
  body: [`constructor(\${1:${Placeholders.Params}}) {\n\t$0\n}`],
  description: 'Add default constructor in a class',
};

const exportClass: Snippet = {
  key: 'export.class',
  prefix: 'ecl',
  body: [`export default class \${1:${Placeholders.ClassName}} {\n\t$0\n}`],
  description: 'Export default class',
};

const exportClassExtends: Snippet = {
  key: 'export.class.extends',
  prefix: 'ece',
  body: [
    `export default class \${1:${Placeholders.ClassName}} extends \${2:${Placeholders.BaseClassName}} {\n\t$0\n}`,
  ],
  description: 'Export default class which extends a base one',
};

const propertyGet: Snippet = {
  key: 'property.get',
  prefix: 'pge',
  body: [`get \${1:${Placeholders.FunctionName}}() {`, `  return this.$0`, '}'],
  description: 'Creates a getter property inside a class',
};

const propertySet: Snippet = {
  key: 'property.set',
  prefix: 'pse',
  body: [`set \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Value}}) {\n\t$0\n}`],
  description: 'Creates a setter property inside a class',
};

const anonymousFunction: Snippet = {
  key: 'anonymous.function',
  prefix: 'anfn',
  body: [`(\${1:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates an anonymous function',
};

const namedFunction: Snippet = {
  key: 'named.function',
  prefix: 'nfn',
  body: [`const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates a named function',
};

const functionSnippet: Snippet = {
  key: 'function',
  prefix: 'fun',
  body: [
    `function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Creates a function',
};

// JavaScript common snippets
const forEach: Snippet = {
  key: 'for.each',
  prefix: 'fre',
  body: [`\${1:${Placeholders.Array}}.forEach(\${2:${Placeholders.Item}} => {\n\t$0\n})`],
  description: 'Creates a forEach statement',
};

const forOf: Snippet = {
  key: 'for.of',
  prefix: 'fof',
  body: [`for(const \${1:${Placeholders.Item}} of \${2:${Placeholders.Array}}) {\n\t$0\n}`],
  description: 'Iterating over property names of iterable objects',
};

const forIn: Snippet = {
  key: 'for.in',
  prefix: 'fin',
  body: [`for(const \${1:${Placeholders.Item}} in \${2:${Placeholders.Object}}) {\n\t$0\n}`],
  description: 'Iterating over property values of iterable objects',
};

const constVariable: Snippet = {
  key: 'const.variable',
  prefix: 'cos',
  body: [`const \${1:${Placeholders.Params}} = \${2:${Placeholders.Value}}`],
  description: 'Creates and assigns a local variable',
};

const destructingObject: Snippet = {
  key: 'destructing.object',
  prefix: 'dob',
  body: [`const {\${2:${Placeholders.Value}}} = \${1:${Placeholders.Object}}`],
  description: 'Creates and assigns a local variable using object destructing',
};

const destructingArray: Snippet = {
  key: 'destructing.array',
  prefix: 'dar',
  body: [`const [\${2:${Placeholders.Data}}] = \${1:${Placeholders.Array}}`],
  description: 'Creates and assigns a local variable using array destructing',
};

const setInterval: Snippet = {
  key: 'setInterval',
  prefix: 'sti',
  body: [`setInterval(() => { \n\t$2\n }, \${1:${Placeholders.Time}})`],
  description: 'Executes the given function at specified intervals',
};

const setTimeOut: Snippet = {
  key: 'setTimeout',
  prefix: 'sto',
  body: [`setTimeout(() => { \n\t$2\n }, \${1:${Placeholders.Time}})`],
  description: 'Executes the given function after the specified delay',
};

const promise: Snippet = {
  key: 'promise',
  prefix: 'prom',
  body: [`return new Promise((resolve, reject) => { \n\t$1\n })`],
  description: 'Creates and returns a new Promise',
};

const thenCatch: Snippet = {
  key: 'then.catch',
  prefix: 'thenc',
  body: [
    `.then((\${1:${Placeholders.Result}}) => {\n\t$2\n}).catch((\${3:${Placeholders.Error}}) => {\n\t$4\n})`,
  ],
  description: 'Add the .then and .catch methods to handle promises',
};

export default [
  // Import/Export
  importAs,
  importDestructing,
  importEverything,
  importNoModuleName,
  importSnippet,
  exportAs,
  exportDestructing,
  exportDefault,
  // Variables and Functions
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
  functionSnippet,
  // JavaScript Common
  forEach,
  forOf,
  forIn,
  constVariable,
  destructingObject,
  destructingArray,
  setInterval,
  setTimeOut,
  promise,
  thenCatch,
];
