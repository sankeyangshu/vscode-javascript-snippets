import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const consoleLog: Snippet = {
  key: 'consoleLog',
  prefix: 'clg',
  body: [`console.log(\${1:${Placeholders.Message}})`],
  description: 'Displays a message in the console',
};

const consoleWarn: Snippet = {
  key: 'consoleWarn',
  prefix: 'cwa',
  body: [`console.warn(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console but also displays a yellow warning icon along with the logged message',
};

const consoleError: Snippet = {
  key: 'consoleError',
  prefix: 'cer',
  body: [`console.error(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console and also includes a stack trace from where the method was called',
};

const consoleInfo: Snippet = {
  key: 'consoleInfo',
  prefix: 'cin',
  body: [`console.info(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console but also displays a blue information icon along with the logged message',
};

const consoleTable: Snippet = {
  key: 'consoleTable',
  prefix: 'ctl',
  body: [`console.table([\${1:${Placeholders.Message}}])`],
  description: 'Logs table to console',
};

const consoleTime: Snippet = {
  key: 'consoleTime',
  prefix: 'ctm',
  body: [`console.time('\${1:${Placeholders.Message}}')`],
  description: 'Console time wrapper',
};

const consoleAssert: Snippet = {
  key: 'consoleAssert',
  prefix: 'cas',
  body: [`console.assert(\${1:${Placeholders.Expression}}, \${2:${Placeholders.Data}})`],
  description:
    'If the specified expression is false, the message is written to the console along with a stack trace',
};

const consoleClear: Snippet = {
  key: 'consoleClear',
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'Clears the console',
};

const consoleCount: Snippet = {
  key: 'consoleCount',
  prefix: 'cco',
  body: [`console.count(\${1:${Placeholders.Message}})`],
  description:
    'Writes the the number of times that count() has been invoked at the same line and with the same label',
};

const consoleDir: Snippet = {
  key: 'consoleDir',
  prefix: 'cdi',
  body: [`console.dir(\${1:${Placeholders.Message}})`],
  description: 'Prints a JavaScript representation of the specified object',
};

const consoleGroup: Snippet = {
  key: 'consoleGroup',
  prefix: 'cgr',
  body: [`console.group('\${1:${Placeholders.Message}}')`],
  description:
    'Groups and indents all following output by an additional level, until console.groupEnd() is called.',
};

const consoleGroupEnd: Snippet = {
  key: 'consoleGroupEnd',
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'Closes out the corresponding console.group().',
};

const consoleTrace: Snippet = {
  key: 'consoleTrace',
  prefix: 'ctr',
  body: [`console.trace(\${1:${Placeholders.Message}})`],
  description: 'Prints a stack trace from the point where the method was called',
};

const consoleLogObject: Snippet = {
  key: 'consoleLogObject',
  prefix: 'clo',
  body: [`console.log('\${1:${Placeholders.Params}}', \${2:${Placeholders.Data}})`],
  description: 'Logs property with name.',
};

const consoleLogJson: Snippet = {
  key: 'consoleLogJson',
  prefix: 'clj',
  body: [
    `console.log('\${1:${Placeholders.Message}}', JSON.stringify(\${2:${Placeholders.Message}}, null, 2))`,
  ],
  description: 'Logs stringified JSON property with name.',
};

const consoleTimeEnd: Snippet = {
  key: 'consoleTimeEnd',
  prefix: 'cte',
  body: [`console.timeEnd('\${1:${Placeholders.Message}}')`],
  description: 'Console time end wrapper',
};

export default [
  consoleLog,
  consoleWarn,
  consoleError,
  consoleInfo,
  consoleTable,
  consoleTime,
  consoleAssert,
  consoleClear,
  consoleCount,
  consoleDir,
  consoleGroup,
  consoleGroupEnd,
  consoleTrace,
  consoleLogObject,
  consoleLogJson,
  consoleTimeEnd,
];
