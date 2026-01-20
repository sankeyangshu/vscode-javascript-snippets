import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const useEffect: Snippet = {
  key: 'use.effect',
  prefix: 'useEffect',
  body: [
    'useEffect(() => {',
    `  \${1:${Placeholders.First}}`,
    '',
    '  return () => {',
    `    \${2:${Placeholders.Second}}`,
    '  }',
    `}, [\${3:${Placeholders.Third}}])`,
    '',
  ],
};

const useContext: Snippet = {
  key: 'use.context',
  prefix: 'useContext',
  body: [`const \${1:${Placeholders.First}} = useContext(\${2:${Placeholders.Second}})`],
};

const useState: Snippet = {
  key: 'use.state',
  prefix: 'useState',
  body: [
    `const [\${1:${Placeholders.First}}, set\${1/(.*)/\${1:/capitalize}/}] = useState(\${2:${Placeholders.Second}})`,
  ],
};

const useReducer: Snippet = {
  key: 'use.reducer',
  prefix: 'useReducer',
  body: [
    `const [state, dispatch] = useReducer(\${1:${Placeholders.First}}, \${2:${Placeholders.Second}}, \${3:${Placeholders.Third}})`,
  ],
};

const useCallback: Snippet = {
  key: 'use.callback',
  prefix: 'useCallback',
  body: [
    'useCallback(',
    '  () => {',
    `    \${1:${Placeholders.First}}`,
    '  },',
    `  [\${2:${Placeholders.Second}}],`,
    ')',
    '',
  ],
};

const useMemo: Snippet = {
  key: 'use.memo',
  prefix: 'useMemo',
  body: [`useMemo(() => \${1:${Placeholders.First}}, [\${2:${Placeholders.Second}}])`],
};

const useRef: Snippet = {
  key: 'use.ref',
  prefix: 'useRef',
  body: [`const \${1:${Placeholders.First}} = useRef(\${2:${Placeholders.Second}})`],
};

const useImperativeHandle: Snippet = {
  key: 'use.imperative.handle',
  prefix: 'useImperativeHandle',
  body: [
    'useImperativeHandle(',
    `  \${1:${Placeholders.First}},`,
    '  () => {',
    `    \${2:${Placeholders.Second}}`,
    '  },',
    `  [\${3:${Placeholders.Third}}],`,
    ')',
  ],
};

const useLayoutEffect: Snippet = {
  key: 'use.layout.effect',
  prefix: 'useLayoutEffect',
  body: [
    'useLayoutEffect(() => {',
    `  \${1:${Placeholders.First}}`,
    '',
    '  return () => {',
    `    \${2:${Placeholders.Second}}`,
    '  };',
    `}, [\${3:${Placeholders.Third}}])`,
  ],
};

export default [
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
];
