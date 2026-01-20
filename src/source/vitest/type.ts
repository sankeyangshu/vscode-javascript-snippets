import type { Snippet } from '../../types';

const expectAnyType: Snippet = {
  key: 'expect.any.type',
  prefix: 'eav',
  body: ['expect.any($1)$0'],
  description: 'expect any value type',
};

const expectAnyString: Snippet = {
  key: 'expect.any.string',
  prefix: 'eas',
  body: ['expect.any(String)$0'],
  description: 'expect any string type',
};

const expectAnyNumber: Snippet = {
  key: 'expect.any.number',
  prefix: 'ean',
  body: ['expect.any(Number)$0'],
  description: 'expect any number type',
};

const expectAnyBoolean: Snippet = {
  key: 'expect.any.boolean',
  prefix: 'eab',
  body: ['expect.any(Boolean)$0'],
  description: 'expect any boolean type',
};

const expectAnyDate: Snippet = {
  key: 'expect.any.date',
  prefix: 'ead',
  body: ['expect.any(Date)$0'],
  description: 'expect any date type',
};

const expectAnyFunction: Snippet = {
  key: 'expect.any.function',
  prefix: 'eaf',
  body: ['expect.any(Function)$0'],
  description: 'expect any function type',
};

const expectAnyArray: Snippet = {
  key: 'expect.any.array',
  prefix: 'eaa',
  body: ['expect.any(Array)$0'],
  description: 'expect any array type',
};

const expectAnyThing: Snippet = {
  key: 'expect.any.thing',
  prefix: 'eat',
  body: ['expect.anything()$0'],
  description: 'expect anything',
};

export default [
  expectAnyType,
  expectAnyString,
  expectAnyNumber,
  expectAnyBoolean,
  expectAnyDate,
  expectAnyFunction,
  expectAnyArray,
  expectAnyThing,
];
