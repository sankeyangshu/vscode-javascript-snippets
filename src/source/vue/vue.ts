import type { Snippet } from '../../types';
import {
  data,
  method,
  scriptSetup,
  scriptSetupTS,
  style,
  styleLess,
  stylePostCss,
  styleSass,
  styleScss,
  styleStylus,
  templateDiv,
} from './base';

/**
 * vue单文件组件代码片段
 */
const vueSingleFileComponent: Snippet = {
  key: 'vue.single.file.component',
  prefix: 'vinit',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...style,
  ],
  description: 'Base for Vue Single File Component',
};

/**
 * vue单文件组件代码片段（scss）
 */
const vueSingleFileComponentWithScss: Snippet = {
  key: 'vue.single.file.component.scss',
  prefix: 'vinit-scss',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleScss,
  ],
  description: 'Base for Vue Single File Component with SCSS',
};

/**
 * vue单文件组件代码片段（less）
 */
const vueSingleFileComponentWithLess: Snippet = {
  key: 'vue.single.file.component.less',
  prefix: 'vinit-less',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleLess,
  ],
  description: 'Base for Vue Single File Component with Less',
};

/**
 * vue单文件组件代码片段（sass）
 */
const vueSingleFileComponentWithSass: Snippet = {
  key: 'vue.single.file.component.sass',
  prefix: 'vinit-sass',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleSass,
  ],
  description: 'Base for Vue Single File Component with Sass',
};

/**
 * vue单文件组件代码片段（stylus）
 */
const vueSingleFileComponentWithStylus: Snippet = {
  key: 'vue.single.file.component.stylus',
  prefix: 'vinit-stylus',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...styleStylus,
  ],
  description: 'Base for Vue Single File Component with Stylus',
};

/**
 * vue单文件组件代码片段（postcss）
 */
const vueSingleFileComponentWithPostCss: Snippet = {
  key: 'vue.single.file.component.postcss',
  prefix: 'vinit-postcss',
  body: [
    ...templateDiv,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...stylePostCss,
  ],
  description: 'Base for Vue Single File Component with PostCss',
};

/**
 * vue composition Api 代码片段
 */
const vueSingleFileComponentCompositionApi: Snippet = {
  key: 'vue.composition.api',
  prefix: 'vbase',
  body: [...templateDiv, '', ...scriptSetup, '', ...style],
  description: 'Base for Vue File Composition API',
};

/**
 * vue composition Api 代码片段（scss）
 */
const vueSingleFileComponentCompositionApiWithScss: Snippet = {
  key: 'vue.composition.api.scss',
  prefix: 'vbase-scss',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleScss],
  description: 'Base for Vue File Composition API with SCSS',
};

/**
 * vue composition Api 代码片段（less）
 */
const vueSingleFileComponentCompositionApiWithLess: Snippet = {
  key: 'vue.composition.api.less',
  prefix: 'vbase-less',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleLess],
  description: 'Base for Vue File Composition API with Less',
};

/**
 * vue composition Api 代码片段（sass）
 */
const vueSingleFileComponentCompositionApiWithSass: Snippet = {
  key: 'vue.composition.api.sass',
  prefix: 'vbase-sass',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleSass],
  description: 'Base for Vue File Composition API with Sass',
};

/**
 * vue composition Api 代码片段（stylus）
 */
const vueSingleFileComponentCompositionApiWithStylus: Snippet = {
  key: 'vue.composition.api.stylus',
  prefix: 'vbase-stylus',
  body: [...templateDiv, '', ...scriptSetup, '', ...styleStylus],
  description: 'Base for Vue File Composition API with Stylus',
};

/**
 * vue composition Api 代码片段（postcss）
 */
const vueSingleFileComponentCompositionApiWithPostCss: Snippet = {
  key: 'vue.composition.api.postcss',
  prefix: 'vbase-postcss',
  body: [...templateDiv, '', ...scriptSetup, '', ...stylePostCss],
  description: 'Base for Vue File Composition API with PostCss',
};

/**
 * vue ts 单文件组件代码片段
 */
const vueSingleFileComponentCompositionApiWithTypescript: Snippet = {
  key: 'vue.composition.api.typescript',
  prefix: 'vts',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...style],
  description: 'Base for Vue Single File Component with Typescript',
};

/**
 * vue ts 单文件组件代码片段（scss）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndScss: Snippet = {
  key: 'vue.composition.api.typescript.scss',
  prefix: 'vts-scss',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleScss],
  description: 'Base for Vue Single File Component with Typescript and SCSS',
};

/**
 * vue ts 单文件组件代码片段（less）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndLess: Snippet = {
  key: 'vue.composition.api.typescript.less',
  prefix: 'vts-less',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleLess],
  description: 'Base for Vue Single File Component with Typescript and Less',
};

/**
 * vue ts 单文件组件代码片段（sass）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndSass: Snippet = {
  key: 'vue.composition.api.typescript.sass',
  prefix: 'vts-sass',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleSass],
  description: 'Base for Vue Single File Component with Typescript and Sass',
};

/**
 * vue ts 单文件组件代码片段（stylus）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndStylus: Snippet = {
  key: 'vue.composition.api.typescript.stylus',
  prefix: 'vts-stylus',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...styleStylus],
  description: 'Base for Vue Single File Component with Typescript and Stylus',
};

/**
 * vue ts 单文件组件代码片段（postcss）
 */
const vueSingleFileComponentCompositionApiWithTypescriptAndPostCss: Snippet = {
  key: 'vue.composition.api.typescript.postcss',
  prefix: 'vts-postcss',
  body: [...templateDiv, '', ...scriptSetupTS, '', ...stylePostCss],
  description: 'Base for Vue Single File Component with Typescript and PostCss',
};

export default [
  vueSingleFileComponent,
  vueSingleFileComponentWithScss,
  vueSingleFileComponentWithLess,
  vueSingleFileComponentWithSass,
  vueSingleFileComponentWithStylus,
  vueSingleFileComponentWithPostCss,
  vueSingleFileComponentCompositionApi,
  vueSingleFileComponentCompositionApiWithScss,
  vueSingleFileComponentCompositionApiWithLess,
  vueSingleFileComponentCompositionApiWithSass,
  vueSingleFileComponentCompositionApiWithStylus,
  vueSingleFileComponentCompositionApiWithPostCss,
  vueSingleFileComponentCompositionApiWithTypescript,
  vueSingleFileComponentCompositionApiWithTypescriptAndScss,
  vueSingleFileComponentCompositionApiWithTypescriptAndLess,
  vueSingleFileComponentCompositionApiWithTypescriptAndSass,
  vueSingleFileComponentCompositionApiWithTypescriptAndStylus,
  vueSingleFileComponentCompositionApiWithTypescriptAndPostCss,
];
