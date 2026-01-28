<h1 align="center">✨vscode-javascript-snippets✨</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/sankeyangshu/vscode-javascript-snippets?colorA=363a4f&colorB=8CB90E&style=for-the-badge" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/sankeyangshu/vscode-javascript-snippets?colorA=363a4f&colorB=f5a97f&style=for-the-badge" alt="version" />
  <img src="https://img.shields.io/github/languages/top/sankeyangshu/vscode-javascript-snippets?colorA=363a4f&colorB=1278B9&style=for-the-badge" alt="languages" />
  <img src="https://img.shields.io/github/repo-size/sankeyangshu/vscode-javascript-snippets?colorA=363a4f&colorB=1278B9&style=for-the-badge" alt="repo-size" />
</p>

<h2 align="center">
<sub>snippets for js, ts, react, vue, nestjs and vitest.</sub>
</h2>

## Installation

In order to install an extension you need to launch the Command Palette.

- [_Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [_macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘P`
- [_Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`

There you have either the option to show the already installed snippets or install new ones. Search for _JavaScript and TypeScript Snippets_ and install it.

## Supported languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)
- Html (.html)
- Vue (.vue)

## Configurations

<!-- configs -->

| Key                       | Description                                                                                                                                                            | Type      | Default                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------- |
| `framework.enabled`       | Select which framework snippets to enable                                                                                                                              | `array`   | `["vue","react","nest","vitest"]`                              |
| `react.languageScopes`    | Defines the language scopes for which the snippets will be available.
Use comma separated values.
For example: `typescript,typescriptreact,javascript,javascriptreact` | `string`  | `"typescript,typescriptreact,javascript,javascriptreact"`      |
| `react.importReactOnTop`  | Controls if snippets should add `import React from 'react';` at the top of components.
Use if you have React +17 and use jsx transform.                                | `boolean` | `false`                                                        |
| `vue.languageScopes`      | Defines the language scopes for which the snippets will be available.
Use comma separated values.
For example: `vue,typescript,javascript`                             | `string`  | `"vue,typescript,javascript"`                                  |
| `vue.uniappCodeSnippets`  | Whether to support uniapp code snippets                                                                                                                                | `boolean` | `true`                                                         |
| `vue.vuexCodeSnippets`    | Whether to support vuex code snippets                                                                                                                                  | `boolean` | `false`                                                        |
| `vue.useTemplateSnippets` | Defines the template snippets for which the snippets will be available                                                                                                 | `array`   | `["vinit","vinit-scss","vbase","vbase-scss","vts","vts-scss"]` |

<!-- configs -->

## Snippets

### Common Snippets

For complete Common snippets documentation, visit [Common Snippets](./docs/common.md)

### React Snippets

For complete React snippets documentation, visit [React Snippets](./docs/react.md)

### Vue Snippets

For complete Vue snippets documentation, visit [Vue Snippets](./docs/vue.md)

### Vitest Snippets

For complete Vitest snippets documentation, visit [Vitest Snippets](./docs/vitest.md)

### NestJS Snippets

For complete NestJS snippets documentation, visit [NestJS Snippets](./docs/nest.md)

## License

[MIT](./LICENSE) License © 2024-PRESENT [sankeyangshu](https://github.com/sankeyangshu)
