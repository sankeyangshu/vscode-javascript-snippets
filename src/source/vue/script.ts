import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

/**
 * v-data 代码片段
 */
const vueData: Snippet = {
  key: 'vue.data',
  prefix: 'vdata',
  body: [
    'data() {',
    '\treturn {',
    `\t\t\${1:${Placeholders.First}}: \${2:${Placeholders.Second}}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Data',
};

/**
 * v-props 代码片段
 */
const vueProps: Snippet = {
  key: 'vue.props',
  prefix: 'vprops',
  body: [
    'props: {',
    `\t\${1:${Placeholders.First}}: {`,
    `\t\ttype: \${2:${Placeholders.Second}},`,
    `\t\tdefault: \${3:${Placeholders.Third}}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Props',
};

/**
 * v-method 代码片段
 */
const vueMethods: Snippet = {
  key: 'vue.methods',
  prefix: 'vmethod',
  body: ['methods: {', `\t\${1:${Placeholders.First}}() {`, '\t\t$0', '\t}', '},'],
  description: 'Vue Component Methods',
};

/**
 * v-computed 代码片段
 */
const vueComputed: Snippet = {
  key: 'vue.computed',
  prefix: 'vcomputed',
  body: [
    'computed: {',
    `\t\${1:${Placeholders.First}}() {`,
    `\t\treturn this.\${2:${Placeholders.Second}}`,
    '\t}',
    '},',
  ],
  description: 'Vue Component Computed',
};

/**
 * v-watch 代码片段
 */
const vueWatch: Snippet = {
  key: 'vue.watch',
  prefix: 'vwatcher',
  body: [
    'watch: {',
    `\t\${1:${Placeholders.First}}(\${2:${Placeholders.Second}}, \${3:${Placeholders.Third}}) {`,
    '\t\t$0',
    '\t}',
    '},',
  ],
  description: 'Vue Component Watcher',
};

/**
 * v-watch-options 代码片段
 */
const vueWatchOptions: Snippet = {
  key: 'vue.watch.options',
  prefix: 'vwatcher-options',
  body: [
    'watch: {',
    `\t\${1:${Placeholders.First}}: {`,
    `\t\timmediate: \${2:${Placeholders.Second}},`,
    `\t\tdeep: \${3:${Placeholders.Third}},`,
    `\t\thandler(\${4:${Placeholders.Fourth}}, \${5:${Placeholders.Fifth}}) {`,
    '\t\t\t$0',
    '\t\t}',
    '\t}',
    '},',
  ],
  description: 'Vue Component Watcher with Options',
};

/**
 * v-filter 代码片段
 */
const vueFilter: Snippet = {
  key: 'vue.filter',
  prefix: 'vfilter',
  body: [
    'filters: {',
    `\t\${1:${Placeholders.First}}(\${2:${Placeholders.Second}}) {`,
    '\t\treturn $0;',
    '\t}',
    '},',
  ],
  description: 'Vue Component Filter',
};

/**
 * v-components 代码片段
 */
const vueImportComponent: Snippet = {
  key: 'vue.import.component',
  prefix: 'vcomponents',
  body: ['components: {', `\t\${1:${Placeholders.First}},`, '},'],
  description: 'Import one component into another, within export statement',
};

/**
 * v-emit 代码片段
 */
const vueEmit: Snippet = {
  key: 'vue.emit',
  prefix: 'vemit',
  body: [`\${1:${Placeholders.First}}.\\$emit('\${2:${Placeholders.Second}}', \${3:${Placeholders.Third}})`],
  description: 'Vue Emit',
};

/**
 * v-nextTick 代码片段
 */
const vueNextTick: Snippet = {
  key: 'vue.nextTick',
  prefix: 'vnexttick',
  body: [`\${1:${Placeholders.First}}.\\$nextTick(() => {`, '\t$0', '});'],
  description: 'Vue NextTick',
};

/**
 * v-set 代码片段
 */
const vueSet: Snippet = {
  key: 'vue.set',
  prefix: 'vset',
  body: [
    `\${1:${Placeholders.First}}.\\$set(\${2:${Placeholders.Second}}, \${3:${Placeholders.Third}}, \${4:${Placeholders.Fourth}})`,
  ],
  description: 'Vue Set',
};

/**
 * v-delete 代码片段
 */
const vueDelete: Snippet = {
  key: 'vue.delete',
  prefix: 'vdelete',
  body: [`\${1:${Placeholders.First}}.\\$delete(\${2:${Placeholders.Second}}, \${3:${Placeholders.Third}})`],
  description: 'Vue Delete',
};

/**
 * vue lifecycle beforeCreate 代码片段
 */
const vueLifecycleBeforeCreate: Snippet = {
  key: 'vue.lifecycle.beforeCreate',
  prefix: 'vbeforecreate',
  body: ['beforeCreate () {', '\t$0;', '},'],
  description: 'beforeCreate lifecycle method',
};

/**
 * vue lifecycle created 代码片段
 */
const vueLifecycleCreated: Snippet = {
  key: 'vue.lifecycle.created',
  prefix: 'vcreated',
  body: ['created () {', '\t$0;', '},'],
  description: 'created lifecycle method',
};

/**
 * vue lifecycle beforeMount 代码片段
 */
const vueLifecycleBeforeMount: Snippet = {
  key: 'vue.lifecycle.beforeMount',
  prefix: 'vbeforemount',
  body: ['beforeMount () {', '\t$0;', '},'],
  description: 'beforeMount lifecycle method',
};

/**
 * vue lifecycle mounted 代码片段
 */
const vueLifecycleMounted: Snippet = {
  key: 'vue.lifecycle.mounted',
  prefix: 'vmounted',
  body: ['mounted () {', '\t$0;', '},'],
  description: 'mounted lifecycle method',
};

/**
 * vue lifecycle beforeUpdate 代码片段
 */
const vueLifecycleBeforeUpdate: Snippet = {
  key: 'vue.lifecycle.beforeUpdate',
  prefix: 'vbeforeupdate',
  body: ['beforeUpdate () {', '\t$0;', '},'],
  description: 'beforeUpdate lifecycle method',
};

/**
 * vue lifecycle updated 代码片段
 */
const vueLifecycleUpdated: Snippet = {
  key: 'vue.lifecycle.updated',
  prefix: 'vupdated',
  body: ['updated () {', '\t$0;', '},'],
  description: 'updated lifecycle method',
};

/**
 * vue lifecycle beforeDestroy 代码片段
 */
const vueLifecycleBeforeDestroy: Snippet = {
  key: 'vue.lifecycle.beforeDestroy',
  prefix: 'vbeforedestroy',
  body: ['beforeDestroy () {', '\t$0;', '},'],
  description: 'beforeDestroy lifecycle method',
};

/**
 * vue lifecycle destroyed 代码片段
 */
const vueLifecycleDestroyed: Snippet = {
  key: 'vue.lifecycle.destroyed',
  prefix: 'vdestroyed',
  body: ['destroyed () {', '\t$0;', '},'],
  description: 'destroyed lifecycle method',
};

/**
 * vue lifecycle beforeUnmount 代码片段
 */
const vueLifecycleBeforeUnmount: Snippet = {
  key: 'vue.lifecycle.beforeUnmount',
  prefix: 'vbeforeunmount',
  body: ['beforeUnmount () {', '\t$0;', '},'],
  description: 'beforeUnmount lifecycle method',
};

/**
 * vue lifecycle unmounted 代码片段
 */
const vueLifecycleUnmounted: Snippet = {
  key: 'vue.lifecycle.unmounted',
  prefix: 'vunmounted',
  body: ['unmounted () {', '\t$0;', '},'],
  description: 'unmounted lifecycle method',
};

/**
 * vue composition api ref 代码片段
 */
const vueCompositionApiRef: Snippet = {
  key: 'vue.composition.api.ref',
  prefix: 'v3ref',
  body: [`const \${1:${Placeholders.First}} = ref(\${2})`],
  description: 'Vue Composition api -  Ref',
};

/**
 * vue composition api reactive 代码片段
 */
const vueCompositionApiReactive: Snippet = {
  key: 'vue.composition.api.reactive',
  prefix: 'v3reactive',
  body: [`const \${1:${Placeholders.First}} = reactive({`, '\t$2', '})'],
  description: 'Vue Composition api -  Reactive',
};

/**
 * vue composition api computed 代码片段
 */
const vueCompositionApiComputed: Snippet = {
  key: 'vue.composition.api.computed',
  prefix: 'v3computed',
  body: [`const \${1:${Placeholders.First}} = computed(() => {`, '\treturn $2', '})'],
  description: 'Vue Composition api - computed',
};

/**
 * vue composition api watch 代码片段
 */
const vueCompositionApiWatch: Snippet = {
  key: 'vue.composition.api.watch',
  prefix: 'v3watch',
  body: [`watch(() => \${1:${Placeholders.First}}, (newValue, oldValue) => {`, '\t$2', '})'],
  description: 'Vue Composition api - watcher single source',
};

/**
 * vue composition api watch array 代码片段
 */
const vueCompositionApiWatchArray: Snippet = {
  key: 'vue.composition.api.watch.array',
  prefix: 'v3watch-array',
  body: [
    `watch([\${1:${Placeholders.First}}, \${2:${Placeholders.Second}}], ([new\${1/(.*)/\${1:/capitalize}/}, new\${2/(.*)/\${2:/capitalize}/}], [prev\${1/(.*)/\${1:/capitalize}/}, prev\${2/(.*)/\${2:/capitalize}/}]) => {`,
    '\t$3',
    '})',
  ],
  description: 'Vue Composition api - watch as array',
};

/**
 * vue composition api watcheffect 代码片段
 */
const vueCompositionApiWatchEffect: Snippet = {
  key: 'vue.composition.api.watchEffect',
  prefix: 'v3watcheffect',
  body: ['watchEffect(() => {', '\t$1', '})'],
  description: 'Vue Composition api - watch as array',
};

/**
 * vue composition api Lifecycle onBeforeMount 代码片段
 */
const vueLifecycleHooksOnBeforeMount: Snippet = {
  key: 'vue.lifecycle.hooks.onBeforeMount',
  prefix: 'v3onbeforemount',
  body: ['onBeforeMount(() => {', '\t$1', '})'],
  description: 'Vue onBeforeMount Lifecycle hook',
};

/**
 * vue composition api Lifecycle onMounted 代码片段
 */
const vueLifecycleHooksOnMounted: Snippet = {
  key: 'vue.lifecycle.hooks.onMounted',
  prefix: 'v3onmounted',
  body: ['onMounted(() => {', '\t$1', '})'],
  description: 'Vue Mounted Lifecycle hook',
};

/**
 * vue composition api Lifecycle onBeforeUpdate 代码片段
 */
const vueLifecycleHooksOnBeforeUpdate: Snippet = {
  key: 'vue.lifecycle.hooks.onBeforeUpdate',
  prefix: 'v3onbeforeupdate',
  body: ['onBeforeUpdate(() => {', '\t$1', '})'],
  description: 'Vue onBeforeUpdate Lifecycle hook',
};

/**
 * vue composition api Lifecycle onUpdated 代码片段
 */
const vueLifecycleHooksOnUpdated: Snippet = {
  key: 'vue.lifecycle.hooks.onUpdated',
  prefix: 'v3onupdated',
  body: ['onUpdated(() => {', '\t$1', '})'],
  description: 'Vue onUpdated Lifecycle hook',
};

/**
 * vue composition api Lifecycle onUnmounted 代码片段
 */
const vueLifecycleHooksOnUnmounted: Snippet = {
  key: 'vue.lifecycle.hooks.onUnmounted',
  prefix: 'v3onunmounted',
  body: ['onUnmounted(() => {', '\t$1', '})'],
  description: '(destroyed) Vue onUnmounted Lifecycle hook',
};

/**
 * vue composition api Lifecycle onBeforeUnmount 代码片段
 */
const vueLifecycleHooksOnBeforeUnmount: Snippet = {
  key: 'vue.lifecycle.hooks.onBeforeUnmount',
  prefix: 'v3onbeforeunmount',
  body: ['onBeforeUnmount(() => {', '\t$1', '})'],
  description: '(beforeDestroy) Vue onBeforeUnmount Lifecycle hook',
};

/**
 * vue composition api Lifecycle onErrorCaptured 代码片段
 */
const vueLifecycleHooksOnErrorCaptured: Snippet = {
  key: 'vue.lifecycle.hooks.onErrorCaptured',
  prefix: 'v3onerrorcaptured',
  body: ['onErrorCaptured(() => {', '\t$1', '})'],
  description: 'Vue onErrorCaptured Lifecycle hook',
};

export default [
  vueData,
  vueProps,
  vueMethods,
  vueComputed,
  vueWatch,
  vueWatchOptions,
  vueFilter,
  vueImportComponent,
  vueEmit,
  vueNextTick,
  vueSet,
  vueDelete,
  vueLifecycleBeforeCreate,
  vueLifecycleCreated,
  vueLifecycleBeforeMount,
  vueLifecycleMounted,
  vueLifecycleBeforeUpdate,
  vueLifecycleUpdated,
  vueLifecycleBeforeDestroy,
  vueLifecycleDestroyed,
  vueLifecycleBeforeUnmount,
  vueLifecycleUnmounted,
  vueCompositionApiRef,
  vueCompositionApiReactive,
  vueCompositionApiComputed,
  vueCompositionApiWatch,
  vueCompositionApiWatchArray,
  vueCompositionApiWatchEffect,
  vueLifecycleHooksOnBeforeMount,
  vueLifecycleHooksOnMounted,
  vueLifecycleHooksOnBeforeUpdate,
  vueLifecycleHooksOnUpdated,
  vueLifecycleHooksOnErrorCaptured,
  vueLifecycleHooksOnBeforeUnmount,
  vueLifecycleHooksOnUnmounted,
];
