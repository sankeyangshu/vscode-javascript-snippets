<h1 align="center">
  <img src="https://github.com/sankeyangshu/vscode-javascript-snippets/blob/main/res/logo.png?raw=true" width="80"/>
</h1>

<p align="center">
<i>Visual Studio Code snippets for JavaScript and TypeScript.</i>
</p>

# vscode-javascript-snippets

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

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

### Basic Methods

| Trigger | Content                                                                                             |
| ------: | --------------------------------------------------------------------------------------------------- |
|  `imp→` | imports entire module `import moduleName from 'module'`                                             |
|  `imn→` | imports entire module without module name `import 'module'`                                         |
|  `imd→` | imports only a portion of the module using destructing `import { moduleName } from 'module'`        |
|  `ime→` | imports everything as alias from the module `import * as localAlias from 'module'`                  |
|  `ima→` | imports only a portion of the module as alias `import { moduleName  as localRename } from 'module'` |
|  `exp→` | exports default `export default first`                                                              |
|  `exd→` | export destructing `export { second } from first`                                                   |
|  `exa→` | export destructing as alias `export { second  as alias } from first`                                |
|  `rqr→` | require package `require('')`                                                                       |
|  `req→` | require package to const `const packageName = require('packageName')`                               |
|  `mde→` | default module.exports `module.exports = {}`                                                        |
| `econ→` | exports name variable `export const nameVariable = localVariable`                                   |
|  `enf→` | exports name function `export const log = (parameter) => { console.log(parameter);}`                |
|  `edf→` | exports default function `export default (parameter) => { console.log(parameter);}`                 |
| `ednf→` | exports default class `export default function fileName (parameter){ console.log(parameter);}`      |

### Class helpers

| Trigger | Content                                                                                               |
| ------: | ----------------------------------------------------------------------------------------------------- |
|  `ecl→` | exports default class `export default class Calculator { }`                                           |
|  `ece→` | exports default class by extending a base one `export default class Calculator extends BaseClass { }` |
|  `con→` | adds default constructor in the class `constructor() {}`                                              |
|  `met→` | creates a method inside a class `functionName() {}`                                                   |
|  `pge→` | creates a getter property `get propertyName() {return value;}`                                        |
|  `pse→` | creates a setter property `set propertyName(value) {}`                                                |

### Typescript methods

|   Trigger | Content                                      |
| --------: | -------------------------------------------- |
|  `exptp→` | Export type `export type first = {}`         |
| `expint→` | Export interface `export interface first {}` |

### Various methods

|  Trigger | Content                                                                                |
| -------: | -------------------------------------------------------------------------------------- |
|   `fre→` | forEach loop in ES6 syntax `array.forEach(item => {})`                                 |
|   `fof→` | for ... of loop `for(const item of array) {}`                                          |
|   `fin→` | for ... in loop `for(const item in object) {}`                                         |
|   `cos→` | creates and assigns a local variable `const first = second`                            |
|   `dob→` | destructing object syntax `const {value} = object`                                     |
|   `dar→` | destructing array syntax `const [first, second] = [1,2]`                               |
|   `sti→` | set interval helper method `setInterval(() => {})`                                     |
|   `sto→` | set timeout helper method `setTimeout(() => {})`                                       |
|  `prom→` | creates a new Promise `return new Promise((resolve, reject) => {})`                    |
| `thenc→` | adds then and catch declaration to a promise `.then((res) => {}).catch((error) => {})` |

### Console methods

| Trigger | Content                                                          |
| ------: | ---------------------------------------------------------------- |
|  `cas→` | console alert method `console.assert(expression, data)`          |
|  `ccl→` | console clear `console.clear()`                                  |
|  `cco→` | console count `console.count(message)`                           |
|  `cdi→` | console dir `console.dir(message)`                               |
|  `cer→` | console error `console.error(message)`                           |
|  `cgr→` | console group `console.group(message)`                           |
|  `cge→` | console groupEnd `console.groupEnd()`                            |
|  `clg→` | console log `console.log(message)`                               |
|  `ctr→` | console trace `console.trace(message)`                           |
|  `clo→` | console log object with name `console.log('params :>> ', data);` |
|  `cwa→` | console warn `console.warn`                                      |
|  `cin→` | console info `console.info`                                      |
|  `clt→` | console table `console.table`                                    |
|  `cti→` | console time `console.time`                                      |
|  `cte→` | console timeEnd `console.timeEnd`                                |

## License

[MIT License](https://github.com/sankeyangshu/vscode-javascript-snippets/blob/main/LICENSE)
