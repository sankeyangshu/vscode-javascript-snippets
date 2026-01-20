import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const toBe: Snippet = {
  key: 'toBe',
  prefix: 'tb',
  body: ['expect($1).toBe($2)$0'],
  description: 'expects the first argument to be equal with the second one',
};

const toBeCloseTo: Snippet = {
  key: 'toBeCloseTo',
  prefix: 'tbct',
  body: [`expect($1).toBeCloseTo(\${2:${Placeholders.Number}}, \${3:${Placeholders.Delta}})$0`],
  description: 'expects the first argument to be close to the second one base on the delta',
};

const toBeDefined: Snippet = {
  key: 'toBeDefined',
  prefix: 'tbd',
  body: ['expect($1).toBeDefined()$0'],
  description: 'expects the argument is defined',
};

const toBeFalsy: Snippet = {
  key: 'toBeFalsy',
  prefix: 'tbf',
  body: ['expect($1).toBeFalsy()$0'],
  description: 'expects the argument is falsy',
};

const toBeGreaterThan: Snippet = {
  key: 'toBeGreaterThan',
  prefix: 'tbgt',
  body: ['expect($1).toBeGreaterThan($2)$0'],
  description: 'expects the argument is greater than or equal',
};

const toBeGreaterThanOrEqual: Snippet = {
  key: 'toBeGreaterThanOrEqual',
  prefix: 'tbgte',
  body: ['expect($1).toBeGreaterThanOrEqual($2)$0'],
  description: 'expects the argument is greater than',
};

const toBeInTheDocument: Snippet = {
  key: 'toBeInTheDocument',
  prefix: 'tbid',
  body: ['expect($1).toBeInTheDocument()$0'],
  description: 'expects the argument to be in the document',
};

const toBeInstanceOf: Snippet = {
  key: 'toBeInstanceOf',
  prefix: 'tbi',
  body: ['expect($1).toBeInstanceOf($2)$0'],
  description: 'expects the argument is less than',
};

const toBeLessThan: Snippet = {
  key: 'toBeLessThan',
  prefix: 'tblt',
  body: ['expect($1).toBeLessThan($2)$0'],
  description: 'expects the argument is less than',
};

const toBeLessThanOrEqual: Snippet = {
  key: 'toBeLessThanOrEqual',
  prefix: 'tblte',
  body: ['expect($1).toBeLessThanOrEqual($2)$0'],
  description: 'expects the argument is less than or equal',
};

const toBeNull: Snippet = {
  key: 'toBeNull',
  prefix: 'tbn',
  body: ['expect($1).toBeNull()$0'],
  description: 'expects the argument is null',
};

const toBeTruthy: Snippet = {
  key: 'toBeTruthy',
  prefix: 'tbt',
  body: ['expect($1).toBeTruthy()$0'],
  description: 'expects the argument is truthy',
};

const toBeUndefined: Snippet = {
  key: 'toBeUndefined',
  prefix: 'tbu',
  body: ['expect($1).toBeUndefined()$0'],
  description: 'expects the argument is undefined',
};

const toContain: Snippet = {
  key: 'toContain',
  prefix: 'tc',
  body: [`expect(\${1:${Placeholders.List}}).toContain($2)$0`],
  description: 'expects the list contains the item (===)',
};

const toContainEqual: Snippet = {
  key: 'toContainEqual',
  prefix: 'tce',
  body: [`expect(\${1:${Placeholders.List}}).toContainEqual($2)$0`],
  description: 'expects the list contains the item (equals)',
};

const toEqual: Snippet = {
  key: 'toEqual',
  prefix: 'te',
  body: ['expect($1).toEqual($2)$0'],
  description: 'expects the first argument to be equal with the second one',
};

const toHaveBeenCalled: Snippet = {
  key: 'toHaveBeenCalled',
  prefix: 'thbc',
  body: ['expect($1).toHaveBeenCalled()$0'],
  description: 'returns true if the spy was called',
};

const toHaveBeenCalledTimes: Snippet = {
  key: 'toHaveBeenCalledTimes',
  prefix: 'thbct',
  body: ['expect($1).toHaveBeenCalledTimes($2)$0'],
  description: 'returns true if the spy has been called given times',
};

const toHaveBeenCalledWith: Snippet = {
  key: 'toHaveBeenCalledWith',
  prefix: 'thbcw',
  body: ['expect($1).toHaveBeenCalledWith($2)$0'],
  description: 'returns true if the spy has been called with',
};

const toHaveBeenLastCalledWith: Snippet = {
  key: 'toHaveBeenLastCalledWith',
  prefix: 'thblcw',
  body: ['expect($1).toHaveBeenLastCalledWith($2)$0'],
  description: 'returns true if the spy has been last called with',
};

const toHaveLength: Snippet = {
  key: 'toHaveLength',
  prefix: 'thl',
  body: ['expect($1).toHaveLength($2)$0'],
  description: 'expects the object to have length',
};

const toHaveProperty: Snippet = {
  key: 'toHaveProperty',
  prefix: 'thp',
  body: [`expect($1).toHaveProperty(\${2:${Placeholders.KeyPath}}, \${3:${Placeholders.Value}})$0`],
  description: 'returns true if the argument matches the second object',
};

const toHavePropertyDisabled: Snippet = {
  key: 'toHavePropertyDisabled',
  prefix: 'thpd',
  body: ['expect($1).toHaveProperty(\'disabled\')$0'],
  description: 'returns true if the property disabled',
};

const toHavePropertySelected: Snippet = {
  key: 'toHavePropertySelected',
  prefix: 'thps',
  body: ['expect($1).toHaveProperty(\'disabled\')$0'],
  description: 'returns true if the property selected',
};

const toMatch: Snippet = {
  key: 'toMatch',
  prefix: 'tm',
  body: ['expect($1).toMatch($2)$0'],
  description: 'returns true if the argument matches the second value',
};

const toMatchInlineSnapshot: Snippet = {
  key: 'toMatchInlineSnapshot',
  prefix: 'tmis',
  body: ['expect($1).toMatchInlineSnapshot($2)$0'],
  description: 'returns true if the argument matches the most recent inline snapshot',
};

const toMatchObject: Snippet = {
  key: 'toMatchObject',
  prefix: 'tmo',
  body: ['expect($1).toMatchObject($2)$0'],
  description: 'returns true if the argument matches the second object',
};

const toMatchSnapshot: Snippet = {
  key: 'toMatchSnapshot',
  prefix: 'tms',
  body: ['expect($1).toMatchSnapshot($2)$0'],
  description: 'returns true if the argument matches the most recent snapshot',
};

const toStrictEqual: Snippet = {
  key: 'toStrictEqual',
  prefix: 'tse',
  body: ['expect($1).toStrictEqual($2)$0'],
  description: 'expects the first argument to be strictly equal with the second one',
};

const toThrow: Snippet = {
  key: 'toThrow',
  prefix: 'tt',
  body: ['expect(() => {', '\t$0', '}).toThrow($1)'],
  description: 'expects that the method will throw an error',
};

const toThrowError: Snippet = {
  key: 'toThrowError',
  prefix: 'tte',
  body: ['expect(() => {', '\t$0', '}).toThrowError($1)'],
  description: 'expects that the method will throw an error',
};

const toThrowErrorMatchingInlineSnapshot: Snippet = {
  key: 'toThrowErrorMatchingInlineSnapshot',
  prefix: 'ttemis',
  body: ['expect(() => {', '\t$0', '}).toThrowErrorMatchingInlineSnapshot()'],
  description: 'expects that the method will throw an error matching the inline snapshot',
};

const toThrowErrorMatchingSnapshot: Snippet = {
  key: 'toThrowErrorMatchingSnapshot',
  prefix: 'ttems',
  body: ['expect(() => {', '\t$0', '}).toThrowErrorMatchingSnapshot()'],
  description: 'expects that the method will throw an error matching the snapshot',
};

export default [
  toBe,
  toBeCloseTo,
  toBeDefined,
  toBeFalsy,
  toBeGreaterThan,
  toBeGreaterThanOrEqual,
  toBeInTheDocument,
  toBeInstanceOf,
  toBeLessThan,
  toBeLessThanOrEqual,
  toBeNull,
  toBeTruthy,
  toBeUndefined,
  toContain,
  toContainEqual,
  toEqual,
  toHaveBeenCalled,
  toHaveBeenCalledTimes,
  toHaveBeenCalledWith,
  toHaveBeenLastCalledWith,
  toHaveLength,
  toHaveProperty,
  toHavePropertyDisabled,
  toHavePropertySelected,
  toMatch,
  toMatchInlineSnapshot,
  toMatchObject,
  toMatchSnapshot,
  toStrictEqual,
  toThrow,
  toThrowError,
  toThrowErrorMatchingInlineSnapshot,
  toThrowErrorMatchingSnapshot,
];
