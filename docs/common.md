# Common Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

<br>

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
| `efun→` | export function `export function functionName(params) {}`                                           |
|  `edf→` | exports default function `export default (parameter) => { console.log(parameter);}`                 |
| `ednf→` | exports default named function `export default function fileName (parameter){ console.log(parameter);}`|

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
|    `tp→`  | Type `type first = {}`                       |
|   `int→`  | Interface `interface first {}`               |
|   `etp→`  | Export type `export type first = {}`         |
|  `eint→`  | Export interface `export interface first {}` |

### Various methods

|  Trigger | Content                                                                                |
| -------: | -------------------------------------------------------------------------------------- |
|  `anfn→` | anonymous function `(params) => {}`                                                    |
|   `nfn→` | named function `const functionName = (params) => {}`                                   |
|   `fun→` | function `function functionName(params) {}`                                            |
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
|   `uss→` | use strict statement `use strict`                                                      |

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
|  `clj→` | console log json `console.log('message', JSON.stringify(data, null, 2))` |
|  `cwa→` | console warn `console.warn`                                      |
|  `cin→` | console info `console.info`                                      |
|  `clt→` | console table `console.table`                                    |
|  `cti→` | console time `console.time`                                      |
|  `cte→` | console timeEnd `console.timeEnd`                                |
