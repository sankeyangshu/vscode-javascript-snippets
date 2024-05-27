module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^~/'], ['^../'], ['^./']],
      },
    ],
    'simple-import-sort/exports': 'error', // 导出
    'import/order': 'off',
  },
};
