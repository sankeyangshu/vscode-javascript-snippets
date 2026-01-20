import type { Snippet } from '../../types';
import { Placeholders } from '../../types';
import { vue, vuex } from './base';

/**
 * vxstore 代码片段
 */
const vuexStore: Snippet = {
  key: 'vue.vuex.store',
  prefix: 'vxstore',
  body: [
    ...vue,
    ...vuex,
    '',
    'Vue.use(Vuex);',
    '',
    'export default new Vuex.Store({',
    '\tmodules: {},',
    '\tstate: {',
    `\t\t\${1:${Placeholders.First}}: \${2:${Placeholders.Second}}`,
    '\t}',
    '\tmutations: {}',
    '\tactions: {}',
    '});',
  ],
  description: 'Base for Vuex store',
};

/**
 * vxgetter 代码片段
 */
const vuexGetters: Snippet = {
  key: 'vue.vuex.getters',
  prefix: 'vxgetter',
  body: [
    'getters: {',
    `\t\${1:${Placeholders.First}}: state => {`,
    `\t\treturn state.\${2:${Placeholders.Second}};`,
    '\t}',
    '}',
  ],
  description: 'vuex getter',
};

/**
 * vxmutation 代码片段
 */
const vuexMutation: Snippet = {
  key: 'vue.vuex.mutation',
  prefix: 'vxmutation',
  body: [
    'mutations: {',
    `\t\${1:${Placeholders.First}}(state, \${3:${Placeholders.Third}}) {`,
    `\t\tstate.\${2:${Placeholders.Second}} = \${3:${Placeholders.Third}};`,
    '\t}',
    '}',
  ],
  description: 'vuex mutation',
};

/**
 * vxaction 代码片段
 */
const vuexAction: Snippet = {
  key: 'vue.vuex.action',
  prefix: 'vxaction',
  body: [
    'actions: {',
    `\t\${1:${Placeholders.First}}({commit}, \${2:${Placeholders.Second}}) {`,
    `\t\tcommit('\${1:${Placeholders.First}}', \${2:${Placeholders.Second}});`,
    '\t}',
    '}',
  ],
  description: 'vuex action',
};

/**
 * vxmodule 代码片段
 */
const vuexModule: Snippet = {
  key: 'vue.vuex.module',
  prefix: 'vxmodule',
  body: [
    'export default {',
    '\tstate: {',
    '\t\tvalue: \'my value\'',
    '\t},',
    '\tgetters: {',
    '\t\tvalue: state => {',
    '\t\t\treturn state.value;',
    '\t\t}',
    '\t},',
    '\tmutations: {',
    '\t\tupdateValue(state, payload) {',
    '\t\t\tstate.value = payload;',
    '\t\t}',
    '\t},',
    '\tactions: {',
    '\t\tupdateValue({commit}, payload) {',
    '\t\t\tcommit(\'updateValue\', payload);',
    '\t\t}',
    '\t}',
    '};',
  ],
  description: 'vuex module',
};

export default [vuexStore, vuexGetters, vuexMutation, vuexAction, vuexModule];
