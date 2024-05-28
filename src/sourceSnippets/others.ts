import { Placeholders, SnippetType } from '../types';

const forEach: SnippetType = {
  key: 'forEach',
  prefix: 'fre',
  body: [`\${1:${Placeholders.Array}}.forEach(\${2:${Placeholders.Item}} => {\n\t$0\n})`],
  description: 'Creates a forEach statement',
};

const forOf: SnippetType = {
  key: 'forOf',
  prefix: 'fof',
  body: [`for(const \${1:${Placeholders.Item}} of \${2:${Placeholders.Array}}) {\n\t$0\n}`],
  description: 'Iterating over property names of iterable objects',
};

const forIn: SnippetType = {
  key: 'forIn',
  prefix: 'fin',
  body: [`for(const \${1:${Placeholders.Item}} in \${2:${Placeholders.Object}}) {\n\t$0\n}`],
  description: 'Iterating over property values of iterable objects',
};

const constVariable: SnippetType = {
  key: 'constVariable',
  prefix: 'cos',
  body: [`const \${1:${Placeholders.Params}} = \${2:${Placeholders.Value}}`],
  description: 'Creates and assigns a local variable',
};

const destructingObject: SnippetType = {
  key: 'destructingObject',
  prefix: 'dob',
  body: [`const {\${2:${Placeholders.Value}}} = \${1:${Placeholders.Object}}`],
  description: 'Creates and assigns a local variable using object destructing',
};

const destructingArray: SnippetType = {
  key: 'destructingArray',
  prefix: 'dar',
  body: [`const [\${2:${Placeholders.Data}}] = \${1:${Placeholders.Array}}`],
  description: 'Creates and assigns a local variable using array destructing',
};

const setInterval: SnippetType = {
  key: 'setInterval',
  prefix: 'sti',
  body: [`setInterval(() => { \n\t$2\n }, \${1:${Placeholders.Time}})`],
  description: 'Executes the given function at specified intervals',
};

const setTimeOut: SnippetType = {
  key: 'setTimeOut',
  prefix: 'sto',
  body: [`setTimeout(() => { \n\t$2\n }, \${1:${Placeholders.Time}})`],
  description: 'Executes the given function after the specified delay',
};

const promise: SnippetType = {
  key: 'promise',
  prefix: 'prom',
  body: [`return new Promise((resolve, reject) => { \n\t$1\n })`],
  description: 'Creates and returns a new Promise',
};

const thenCatch: SnippetType = {
  key: 'thenCatch',
  prefix: 'thenc',
  body: [
    `.then((\${1:${Placeholders.Item}}) => {\n\t$2\n}).catch((\${3:${Placeholders.Error}}) => {\n\t$4\n})`,
  ],
  description: 'Add the .then and .catch methods to handle promises',
};

export default [
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
