import type { Snippet } from '../../types';

const viAfterEachMockClearReset: Snippet = {
  key: 'vi.afterEach.mockClearReset',
  prefix: 'aevcr',
  body: ['afterEach(() => {', '\tvi.clearAllMocks()', '\tvi.resetAllMocks()', '})$0'],
  description: 'afterEach mock clear and reset functions called once after each spec',
};

const viMock: Snippet = {
  key: 'vi.mock',
  prefix: 'vm',
  body: [`vi.mock('\${1:path}')$0`],
  description: 'creates vi.mock()',
};

const viMockMockResolvedValue: Snippet = {
  key: 'vi.mock.mockResolvedValue',
  prefix: 'vmrv',
  body: [`vi.mock('\${1:path}').mockResolvedValue($0)`],
  description: 'creates vi.mock() with resolved value',
};

const viFn: Snippet = {
  key: 'vi.fn',
  prefix: 'vf',
  body: ['vi.fn()$0'],
  description: 'creates vi.fn()',
};

const viFnMockResolvedValue: Snippet = {
  key: 'vi.fn.mockResolvedValue',
  prefix: 'vfrv',
  body: ['vi.fn().mockResolvedValue($0)'],
  description: 'creates vi.fn() with resolved value',
};

const constFn: Snippet = {
  key: 'const.fn',
  prefix: 'cf',
  body: [`const \${1:name}Mock = vi.fn()$0`],
  description: 'creates a mock variable for a vi.fn()',
};

const constFnMockResolvedValue: Snippet = {
  key: 'const.fn.mockResolvedValue',
  prefix: 'cfrv',
  body: [`const \${1:name}Mock = vi.fn().mockResolvedValue($0)`],
  description: 'creates a mock variable for a vi.fn() with resolved value',
};

const mockMockReturnValue: Snippet = {
  key: 'mock.mockReturnValue',
  prefix: 'mrv',
  body: [`\${1:mock}.mockReturnValue($0)`],
  description: 'assign a return value',
};

const mockMockReturnValueOnce: Snippet = {
  key: 'mock.mockReturnValueOnce',
  prefix: 'mrvo',
  body: [`\${1:mock}.mockReturnValueOnce($0)`],
  description: 'assign a return value for only one call',
};

const viSpyOn: Snippet = {
  key: 'vi.spyOn',
  prefix: 'vs',
  body: [`vi.spyOn(\${1:global}, '\${2:method}'))$0`],
  description: 'creates vi.spyOn()',
};

const viSpyOnMockImplementation: Snippet = {
  key: 'vi.spyOn.mockImplementation',
  prefix: 'vsi',
  body: [`vi.spyOn(\${1:global}, '\${2:method}')).mockImplementation(() => $0)`],
  description: 'creates vi.spyOn() with mock implementation',
};

const constSpyOn: Snippet = {
  key: 'const.spyOn',
  prefix: 'cs',
  body: [`const \${2:method}Spy = vi.spyOn(\${1:global}, '\${2:method}'))$0`],
  description: 'creates a spy variable for a vi.spyOn()',
};

const constSpyOnMockImplementation: Snippet = {
  key: 'const.spyOn.mockImplementation',
  prefix: 'csi',
  body: [`const \${2:method}Spy = vi.spyOn(\${1:global}, '\${2:method}')).mockImplementation(() => $0)`],
  description: 'creates a spy variable for a vi.spyOn() with mock implementation',
};

export default [
  viAfterEachMockClearReset,
  viMock,
  viMockMockResolvedValue,
  viFn,
  viFnMockResolvedValue,
  constFn,
  constFnMockResolvedValue,
  mockMockReturnValue,
  mockMockReturnValueOnce,
  viSpyOn,
  viSpyOnMockImplementation,
  constSpyOn,
  constSpyOnMockImplementation,
];
