import type { Snippet } from '../../types';

const expect: Snippet = {
  key: 'expect',
  prefix: 'e',
  body: ['expect($0)'],
  description: 'expect actual value',
};

const expectAssertions: Snippet = {
  key: 'expect.assertions',
  prefix: 'ea',
  body: ['expect.assertions($0)'],
  description: 'expects the test to make the indicated number of assertions (useful for async)',
};

const expectHasAssertions: Snippet = {
  key: 'expect.hasAssertions',
  prefix: 'eha',
  body: ['expect.hasAssertions()$0'],
  description: 'expects the test to make at least one assertion (useful for async)',
};

const expectRejects: Snippet = {
  key: 'expect.rejects',
  prefix: 'erj',
  body: ['expect($1).rejects$0'],
  description: 'expect promise rejects to',
};

const expectResolves: Snippet = {
  key: 'expect.resolves',
  prefix: 'ers',
  body: ['expect($1).resolves$0'],
  description: 'expect promise resolves to',
};

export default [expect, expectAssertions, expectHasAssertions, expectRejects, expectResolves];
