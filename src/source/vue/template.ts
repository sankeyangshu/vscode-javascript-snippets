import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

/**
 * v-for 代码片段
 */
const vueFor: Snippet = {
  key: 'vue.for',
  prefix: 'vfor',
  body: [
    `v-for="(\${2:${Placeholders.Second}}, \${3:${Placeholders.Third}}) in \${1:${Placeholders.First}}" :key="\${4:${Placeholders.Fourth}}"`,
  ],
  description: 'v-for statement',
};

/**
 * v-style 代码片段
 */
const vueStyleBinding: Snippet = {
  key: 'vue.style.binding',
  prefix: 'vstyle',
  body: [` :style="{ fontSize: \${1:${Placeholders.First}} + 'px' }"`],
  description: 'vue inline style binding',
};

/**
 * v-style-obj 代码片段
 */
const vueStyleBindingObject: Snippet = {
  key: 'vue.style.binding.object',
  prefix: 'vstyle-obj',
  body: [` :style="[\${1:${Placeholders.First}}, \${2:${Placeholders.Second}}]"`],
  description: 'vue inline style binding, objects',
};

/**
 * v-class 代码片段
 */
const vueClassBinding: Snippet = {
  key: 'vue.class.binding',
  prefix: 'vclass',
  body: [` :class="{ \${1:${Placeholders.First}}: \${2:${Placeholders.Second}} }"`],
  description: 'vue class binding',
};

/**
 * v-class-obj 代码片段
 */
const vueClassBindingObject: Snippet = {
  key: 'vue.class.binding.object',
  prefix: 'vclass-obj',
  body: [` :class="[\${1:${Placeholders.First}}, \${2:${Placeholders.Second}}]"`],
  description: 'vue class binding',
};

/**
 * v-class-obj-mult 代码片段
 */
const vueClassBindingObjectMultiple: Snippet = {
  key: 'vue.class.binding.object.multiple',
  prefix: 'vclass-obj-mult',
  body: [
    ` :class="[\${1:${Placeholders.First}}, {\${2:${Placeholders.Second}} : \${3:${Placeholders.Third}}}]"`,
  ],
  description: 'vue multiple conditional class bindings',
};

/**
 * v-on 代码片段
 */
const vueVOnShortcut: Snippet = {
  key: 'vue.v.on.shortcut',
  prefix: 'von',
  body: [` @click="\${1:${Placeholders.First}}(\${2:${Placeholders.Second}})"`],
  description: 'v-on click handler with arguments',
};

/**
 * vroutename 代码片段
 */
const vueNamedRoutingLink: Snippet = {
  key: 'vue.named.routing.link',
  prefix: 'vroutename',
  body: [
    `<router-link :to="{name: '\${1:${Placeholders.First}}'}">\${2:${Placeholders.Second}}</router-link>`,
  ],
  description: 'Named routing link',
};

/**
 * vroutenameparam 代码片段
 */
const vueNamedRoutingLinkWithParams: Snippet = {
  key: 'vue.named.routing.link.params',
  prefix: 'vroutenameparam',
  body: [
    `<router-link :to="{name: '\${1:${Placeholders.First}}', params:{\${2:${Placeholders.Second}}: '\${3:${Placeholders.Third}}'} }">\${4:${Placeholders.Fourth}}</router-link>`,
  ],
  description: 'Named routing link w/ params',
};

/**
 * vroutepath 代码片段
 */
const vuePathRoutingLink: Snippet = {
  key: 'vue.path.routing.link',
  prefix: 'vroutepath',
  body: [`<router-link to="\${1:${Placeholders.First}}">\${2:${Placeholders.Second}}</router-link>`],
  description: 'Path routing link',
};

/**
 * vanim 代码片段
 */
const vueTransitionComponentWithJavaScriptHooks: Snippet = {
  key: 'vue.transition.component.javascript.hooks',
  prefix: 'vanim',
  body: [
    '<transition',
    '\tmode="out-in"',
    '\t@before-enter="beforeEnter"',
    '\t@enter="enter"',
    '',
    '\t@before-leave="beforeLeave"',
    '\t@leave="leave"',
    '\t:css="false">',
    '',
    '</transition>',
  ],
  description: 'transition component js hooks',
};

/**
 * vcomponent 代码片段
 */
const vueComponent: Snippet = {
  key: 'vue.component',
  prefix: 'vcomponent',
  body: [`<component :is="\${1:${Placeholders.First}}"></component>$0`],
  description: 'component element',
};

export default [
  vueFor,
  vueStyleBinding,
  vueStyleBindingObject,
  vueClassBinding,
  vueClassBindingObject,
  vueClassBindingObjectMultiple,
  vueVOnShortcut,
  vueNamedRoutingLink,
  vueNamedRoutingLinkWithParams,
  vuePathRoutingLink,
  vueTransitionComponentWithJavaScriptHooks,
  vueComponent,
];
