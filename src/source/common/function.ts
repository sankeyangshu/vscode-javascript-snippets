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
  key: 'importNoModuleName',
  prefix: 'imn',
  body: [`import '\${1:${Placeholders.ModuleName}}'`],
  description: 'Import module without module name',
};

const importDestructing: Snippet = {
  key: 'importDestructing',
  prefix: 'imd',
  body: [`import { \${2:} } from '\${1:${Placeholders.Module}}'`],
  description: 'Import module with destructing',
};

const importEverything: Snippet = {
  key: 'importEverything',
  prefix: 'ime',
  body: [`import * as \${2:${Placeholders.ModuleName}} from '\${1:${Placeholders.Module}}'`],
  description: 'Import everything as alias',
};

const importAs: Snippet = {
  key: 'importAs',
  prefix: 'ima',
  body: [
    `import { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
  description: 'Import module as alias',
};

const exportDefault: Snippet = {
  key: 'exportDefault',
  prefix: 'exp',
  body: [`export default \${1:${Placeholders.Module}}`],
  description: 'Export default',
};

const exportDestructing: Snippet = {
  key: 'exportDestructing',
  prefix: 'exd',
  body: [`export { \${2:} } from '\${1:${Placeholders.Module}}'`],
  description: 'Export with destructing',
};

const exportAs: Snippet = {
  key: 'exportAs',
  prefix: 'exa',
  body: [
    `export { \${2:${Placeholders.ModuleName}} as \${3:${Placeholders.Alias}} } from '\${1:${Placeholders.Module}}'`,
  ],
  description: 'Export as alias',
};

// Variable and function snippets
const exportNamedVariable: Snippet = {
  key: 'exportNamedVariable',
  prefix: 'econ',
  body: [`export const \${1:${Placeholders.Params}} = \${2:${Placeholders.Data}}`],
  description: 'Export named variable',
};

const exportNamedFunction: Snippet = {
  key: 'exportNamedFunction',
  prefix: 'enf',
  body: [
    `export const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`,
  ],
  description: 'Export named function',
};

const exportFunction: Snippet = {
  key: 'exportFunction',
  prefix: 'efun',
  body: [
    `export function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Export function',
};

const exportDefaultFunction: Snippet = {
  key: 'exportDefaultFunction',
  prefix: 'edf',
  body: [`export default (\${1:${Placeholders.FunctionName}}) => {\${2:${Placeholders.Params}}}`],
  description: 'Export default function',
};

const exportDefaultNamedFunction: Snippet = {
  key: 'exportDefaultNamedFunction',
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
  key: 'exportClass',
  prefix: 'ecl',
  body: [`export default class \${1:${Placeholders.ClassName}} {\n\t$0\n}`],
  description: 'Export default class',
};

const exportClassExtends: Snippet = {
  key: 'exportClassExtends',
  prefix: 'ece',
  body: [
    `export default class \${1:${Placeholders.ClassName}} extends \${2:${Placeholders.BaseClassName}} {\n\t$0\n}`,
  ],
  description: 'Export default class which extends a base one',
};

const propertyGet: Snippet = {
  key: 'propertyGet',
  prefix: 'pge',
  body: [`get \${1:${Placeholders.FunctionName}}() {`, `  return this.$0`, '}'],
  description: 'Creates a getter property inside a class',
};

const propertySet: Snippet = {
  key: 'propertySet',
  prefix: 'pse',
  body: [`set \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Value}}) {\n\t$0\n}`],
  description: 'Creates a setter property inside a class',
};

const anonymousFunction: Snippet = {
  key: 'anonymousFunction',
  prefix: 'anfn',
  body: [`(\${1:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates an anonymous function',
};

const namedFunction: Snippet = {
  key: 'namedFunction',
  prefix: 'nfn',
  body: [`const \${1:${Placeholders.FunctionName}} = (\${2:${Placeholders.Params}}) => {\n\t$0\n}`],
  description: 'Creates a named function',
};

const functionSnippet: Snippet = {
  key: 'functionSnippet',
  prefix: 'fun',
  body: [
    `function \${1:${Placeholders.FunctionName}}(\${2:${Placeholders.Params}}) {\n\t$0\n}`,
  ],
  description: 'Creates a function',
};

// JavaScript common snippets
const forEach: Snippet = {
  key: 'forEach',
  prefix: 'fre',
  body: [`\${1:${Placeholders.Array}}.forEach(\${2:${Placeholders.Item}} => {\n\t$0\n})`],
  description: 'Creates a forEach statement',
};

const forOf: Snippet = {
  key: 'forOf',
  prefix: 'fof',
  body: [`for(const \${1:${Placeholders.Item}} of \${2:${Placeholders.Array}}) {\n\t$0\n}`],
  description: 'Iterating over property names of iterable objects',
};

const forIn: Snippet = {
  key: 'forIn',
  prefix: 'fin',
  body: [`for(const \${1:${Placeholders.Item}} in \${2:${Placeholders.Object}}) {\n\t$0\n}`],
  description: 'Iterating over property values of iterable objects',
};

const constVariable: Snippet = {
  key: 'constVariable',
  prefix: 'cos',
  body: [`const \${1:${Placeholders.Params}} = \${2:${Placeholders.Value}}`],
  description: 'Creates and assigns a local variable',
};

const destructingObject: Snippet = {
  key: 'destructingObject',
  prefix: 'dob',
  body: [`const {\${2:${Placeholders.Value}}} = \${1:${Placeholders.Object}}`],
  description: 'Creates and assigns a local variable using object destructing',
};

const destructingArray: Snippet = {
  key: 'destructingArray',
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
  key: 'setTimeOut',
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
  key: 'thenCatch',
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
