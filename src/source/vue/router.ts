import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

/**
 * v-router 代码片段
 */
const vueRouterBase: Snippet = {
  key: 'vue.router.base',
  prefix: 'vrouter',
  body: [
    'import { createApp } from Vue;',
    'import { createRouter, createWebHashHistory } from \'vue-router\';',
    '',
    'export const router = createRouter({',
    '\thistory: createWebHashHistory(),',
    '\troutes: [',
    '\t\t{ path: \'/path\', component: component }',
    '\t]',
    '});',
  ],
  description: 'Base for Vue Router',
};

/**
 * v-scrollbehavior 代码片段
 */
const vueRouterScrollBehavior: Snippet = {
  key: 'vue.router.scrollBehavior',
  prefix: 'vscrollbehavior',
  body: [
    'scrollBehavior(to, from, savedPosition) {',
    '\tif(savedPosition) {',
    '\t\treturn savedPosition;',
    '\t} else {',
    '\t\treturn { x: 0, y: 0 };',
    '\t}',
    '},',
  ],
  description: 'Vue Router scrollBehavior',
};

/**
 * v-beforeeach 代码片段
 */
const vueRouterBeforeEach: Snippet = {
  key: 'vue.router.beforeEach',
  prefix: 'vbeforeeach',
  body: ['router.beforeEach((to, from, next) => {', `\t\${1:${Placeholders.First}}`, '});'],
  description: 'Vue Router global guards beforeEach',
};

/**
 * v-beforeresolve 代码片段
 */
const vueRouterBeforeResolve: Snippet = {
  key: 'vue.router.beforeResolve',
  prefix: 'vbeforeresolve',
  body: ['router.beforeResolve((to, from, next) => {', `\t\${1:${Placeholders.First}}`, '});'],
  description: 'Vue Router global guards beforeResolve',
};

/**
 * v-aftereach 代码片段
 */
const vueRouterAfterEach: Snippet = {
  key: 'vue.router.afterEach',
  prefix: 'vaftereach',
  body: ['router.afterEach((to, from) => {', '\t', '});'],
  description: 'Vue Router global guards afterEach',
};

/**
 * v-beforeenter 代码片段
 */
const vueRouterBeforeEnter: Snippet = {
  key: 'vue.router.beforeEnter',
  prefix: 'vbeforeenter',
  body: ['beforeEnter(to, from, next) {', `\t\${1:${Placeholders.First}}`, '},'],
  description: 'Vue Router per-route guard beforeEnter',
};

/**
 * v-beforerouteenter 代码片段
 */
const vueRouterBeforeRouteEnter: Snippet = {
  key: 'vue.router.beforeRouteEnter',
  prefix: 'vbeforerouteenter',
  body: ['beforeRouteEnter(to, from, next) {', `\tnext(vm => {\${1:${Placeholders.First}}});`, '},'],
  description: 'Vue Router component guards beforeRouteEnter',
};

/**
 * v-beforerouteupdate 代码片段
 */
const vueRouterBeforeRouteUpdate: Snippet = {
  key: 'vue.router.beforeRouteUpdate',
  prefix: 'vbeforerouteupdate',
  body: ['beforeRouteUpdate(to, from, next) {', `\t\${1:${Placeholders.First}}`, '},'],
  description: 'Vue Router component guards beforeRouteUpdate',
};

/**
 * v-beforeroutelave 代码片段
 */
const vueRouterBeforeRouteLeave: Snippet = {
  key: 'vue.router.beforeRouteLeave',
  prefix: 'vbeforerouteleave',
  body: ['beforeRouteLeave(to, from, next) {', `\t\${1:${Placeholders.First}}`, '},'],
  description: 'Vue Router component guards beforeRouteLeave',
};

/**
 * v-route named 代码片段
 */
const vueRouterRouteName: Snippet = {
  key: 'vue.router.route.name',
  prefix: 'vroute-named',
  body: [
    '{',
    `\tpath: '\${1:${Placeholders.First}}',`,
    `\tname: '\${2:${Placeholders.Second}}',`,
    `\tcomponent: () => import('./\${3:${Placeholders.Third}}'),`,
    '},',
  ],
  description: 'Vue Router route with per route code-splitting',
};

/**
 * v-route hooks router 代码片段
 */
const vueRouterHooks: Snippet = {
  key: 'vue.router.hooks',
  prefix: 'v3router',
  body: ['const router = useRouter()'],
  description: 'Vue Router hooks',
};

/**
 * v-route hooks route 代码片段
 */
const vueRouteHooks: Snippet = {
  key: 'vue.route.hooks',
  prefix: 'v3route',
  body: ['const route = useRoute()'],
  description: 'Vue Route hooks',
};

export default [
  vueRouterBase,
  vueRouterScrollBehavior,
  vueRouterBeforeEach,
  vueRouterBeforeResolve,
  vueRouterAfterEach,
  vueRouterBeforeEnter,
  vueRouterBeforeRouteEnter,
  vueRouterBeforeRouteUpdate,
  vueRouterBeforeRouteLeave,
  vueRouterRouteName,
  vueRouterHooks,
  vueRouteHooks,
];
