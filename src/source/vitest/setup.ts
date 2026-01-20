import type { Snippet } from '../../types';

const afterAll: Snippet = {
  key: 'afterAll',
  prefix: 'aa',
  body: ['afterAll(() => {', '\t$0', '})'],
  description: 'afterAll function is called once after all specs',
};

const afterEach: Snippet = {
  key: 'afterEach',
  prefix: 'ae',
  body: ['afterEach(() => {', '\t$0', '})'],
  description: 'afterEach function is called once after each spec',
};

const beforeEach: Snippet = {
  key: 'beforeEach',
  prefix: 'be',
  body: ['beforeEach(() => {', '\t$0', '})'],
  description: 'beforeEach function is called once before each spec',
};

const beforeEachAsync: Snippet = {
  key: 'beforeEach:async',
  prefix: 'bea',
  body: ['beforeEach(async () => {', '\t$0', '})'],
  description: 'beforeEach with async callback function is called once before each spec',
};

const beforeAll: Snippet = {
  key: 'beforeAll',
  prefix: 'ba',
  body: ['beforeAll(() => {', '\t$0', '})'],
  description: 'beforeAll function is called once before all specs',
};

const beforeAllAsync: Snippet = {
  key: 'beforeAll:async',
  prefix: 'baa',
  body: ['beforeAll(async () => {', '\t$0', '})'],
  description: 'beforeAll with async function is called once before all specs',
};

export default [afterAll, afterEach, beforeEach, beforeEachAsync, beforeAll, beforeAllAsync];
