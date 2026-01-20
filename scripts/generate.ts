import { commonSnippets } from '../src/source/common';
import { nestSnippets } from '../src/source/nest';
import { reactSnippets } from '../src/source/react';
import { vitestSnippets } from '../src/source/vitest';
import { vueSnippets } from '../src/source/vue';
import { generateSnippets } from '../src/utils';

/**
 * 生成所有框架的代码片段
 */
export async function generateAllSnippets() {
  // 生成 common 代码片段 - js/ts
  generateSnippets(commonSnippets, 'common.json');

  // 生成 vue 代码片段 - vue
  generateSnippets(vueSnippets, 'vue.json');

  // 生成 react 代码片段 - react
  generateSnippets(reactSnippets, 'react.json');

  // 生成 nest 代码片段 - nest
  generateSnippets(nestSnippets, 'nest.json');

  // 生成 vitest 代码片段 - vitest
  generateSnippets(vitestSnippets, 'vitest.json');
}

try {
  console.log('🚀 Generating all snippets...');
  void generateAllSnippets();
  console.log('✅ All snippets generated successfully!');
} catch (err) {
  console.error(err);
}
