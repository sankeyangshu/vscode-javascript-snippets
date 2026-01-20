import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const consoleLog: Snippet = {
  key: 'console.log',
  prefix: 'clg',
  body: [`console.log(\${1:${Placeholders.Message}})`],
  description: 'Displays a message in the console',
};

const consoleWarn: Snippet = {
  key: 'console.warn',
  prefix: 'cwa',
  body: [`console.warn(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console but also displays a yellow warning icon along with the logged message',
};

const consoleError: Snippet = {
  key: 'console.error',
  prefix: 'cer',
  body: [`console.error(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console and also includes a stack trace from where the method was called',
};

const consoleInfo: Snippet = {
  key: 'console.info',
  prefix: 'cin',
  body: [`console.info(\${1:${Placeholders.Message}})`],
  description:
    'Displays a message in the console but also displays a blue information icon along with the logged message',
};

const consoleTable: Snippet = {
  key: 'console.table',
  prefix: 'ctl',
  body: [`console.table([\${1:${Placeholders.Message}}])`],
  description: 'Logs table to console',
};

const consoleTime: Snippet = {
  key: 'console.time',
  prefix: 'ctm',
  body: [`console.time('\${1:${Placeholders.Message}}')`],
  description: 'Console time wrapper',
};

const consoleAssert: Snippet = {
  key: 'console.assert',
  prefix: 'cas',
  body: [`console.assert(\${1:${Placeholders.Expression}}, \${2:${Placeholders.Data}})`],
  description:
    'If the specified expression is false, the message is written to the console along with a stack trace',
};

const consoleClear: Snippet = {
  key: 'console.clear',
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'Clears the console',
};

const consoleCount: Snippet = {
  key: 'console.count',
  prefix: 'cco',
  body: [`console.count(\${1:${Placeholders.Message}})`],
  description:
    'Writes the the number of times that count() has been invoked at the same line and with the same label',
};

const consoleDir: Snippet = {
  key: 'console.dir',
  prefix: 'cdi',
  body: [`console.dir(\${1:${Placeholders.Message}})`],
  description: 'Prints a JavaScript representation of the specified object',
};

const consoleGroup: Snippet = {
  key: 'console.group',
  prefix: 'cgr',
  body: [`console.group('\${1:${Placeholders.Message}}')`],
  description:
    'Groups and indents all following output by an additional level, until console.groupEnd() is called.',
};

const consoleGroupEnd: Snippet = {
  key: 'console.groupEnd',
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'Closes out the corresponding console.group().',
};

const consoleTrace: Snippet = {
  key: 'console.trace',
  prefix: 'ctr',
  body: [`console.trace(\${1:${Placeholders.Message}})`],
  description: 'Prints a stack trace from the point where the method was called',
};

const consoleLogObject: Snippet = {
  key: 'console.log.object',
  prefix: 'clo',
  body: [`console.log('\${1:${Placeholders.Params}}', \${2:${Placeholders.Data}})`],
  description: 'Logs property with name.',
};

const consoleLogJson: Snippet = {
  key: 'console.log.json',
  prefix: 'clj',
  body: [
    `console.log('\${1:${Placeholders.Message}}', JSON.stringify(\${2:${Placeholders.Message}}, null, 2))`,
  ],
  description: 'Logs stringified JSON property with name.',
};

const consoleTimeEnd: Snippet = {
  key: 'console.timeEnd',
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
