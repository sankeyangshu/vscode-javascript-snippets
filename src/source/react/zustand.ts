import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const zustand: Snippet = {
  key: 'zustand',
  prefix: 'rzust',
  body: [
    'import { create } from \'zustand\'',
    '',
    `export const \${1:${Placeholders.First}} = create((set) => ({`,
    `  \${2:${Placeholders.Second}}`,
    '',
    '}))',
    '',
  ],
};

const zustandTypescript: Snippet = {
  key: 'zustand.typescript',
  prefix: 'rtzust',
  body: [
    'import { create } from \'zustand\'',
    '',
    `interface \${1:${Placeholders.First}} {`,
    '',
    '}',
    '',
    `export const \${2:${Placeholders.Second}} = create<\${1:${Placeholders.First}}>()((set) => ({`,
    `  \${3:${Placeholders.Third}}`,
    '',
    '}))',
    '',
  ],
};

export default [zustand, zustandTypescript];
