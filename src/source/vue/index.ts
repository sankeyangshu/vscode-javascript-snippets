import piniaSnippets from './pinia';
import routerSnippets from './router';
import scriptSnippets from './script';
import templateSnippets from './template';
import { uniappCollectionSnippets, uniappTemplateSnippets } from './uniapp';
import vueBaseSnippets from './vue';
import vuexSnippets from './vuex';

export const vueSnippets = [
  ...piniaSnippets,
  ...routerSnippets,
  ...scriptSnippets,
  ...templateSnippets,
  ...uniappTemplateSnippets,
  ...uniappCollectionSnippets,
  ...vueBaseSnippets,
  ...vuexSnippets,
];
