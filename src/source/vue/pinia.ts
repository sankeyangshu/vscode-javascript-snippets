import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

/**
 * vpinia 代码片段
 */
const vuePiniaStore: Snippet = {
  key: 'vue.pinia.store',
  prefix: 'vpinia',
  body: [
    'import { defineStore } from \'pinia\';',
    '',
    `export const \${1:${Placeholders.First}} = defineStore({`,
    `\tid: '\${2:${Placeholders.Second}}',`,
    '\tstate: () => ({',
    `\t\t\${3:${Placeholders.Third}}: \${4:${Placeholders.Fourth}}`,
    '\t}),',
    '});',
  ],
  description: 'Base for Pinia store',
};

/**
 * vgetter 代码片段
 */
const vuePiniaGetters: Snippet = {
  key: 'vue.pinia.getters',
  prefix: 'vgetter',
  body: [
    'getters: {',
    `\t\${1:${Placeholders.First}}: (state) => state.\${2:${Placeholders.Second}},`,
    '}',
  ],
  description: 'vue pinia getter',
};

/**
 * vaction 代码片段
 */
const vuePiniaAction: Snippet = {
  key: 'vue.pinia.action',
  prefix: 'vaction',
  body: ['actions: {', `\t\${1:${Placeholders.First}}() {`, '\t\t$2', '\t}', '}'],
  description: 'vue pinia action',
};

/**
 * vpinia-setup 代码片段 - Setup Store 写法
 */
const vuePiniaSetupStore: Snippet = {
  key: 'vue.pinia.setup',
  prefix: 'vpinia-setup',
  body: [
    'import { defineStore } from \'pinia\';',
    '',
    `export const \${1:${Placeholders.First}} = defineStore('\${2:${Placeholders.Second}}', () => {`,
    '\t$0',
    '',
    '\treturn {};',
    '});',
  ],
  description: 'Pinia Setup Store with Composition API',
};

export default [vuePiniaStore, vuePiniaGetters, vuePiniaAction, vuePiniaSetupStore];
