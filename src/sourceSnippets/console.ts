import { Placeholders, SnippetType } from '../types';

const consoleAssert: SnippetType = {
  key: 'consoleAssert',
  prefix: 'cas',
  body: [`console.assert(${Placeholders.Expression}, ${Placeholders.Data})`],
  description:
    'If the specified expression is false, the message is written to the console along with a stack trace',
};

const consoleClear: SnippetType = {
  key: 'consoleClear',
  prefix: 'ccl',
  body: ['console.clear()'],
  description: 'Clears the console',
};

const consoleCount: SnippetType = {
  key: 'consoleCount',
  prefix: 'cco',
  body: [`console.count(${Placeholders.Message})`],
  description:
    'Writes the the number of times that count() has been invoked at the same line and with the same label',
};

const consoleDir: SnippetType = {
  key: 'consoleDir',
  prefix: 'cdi',
  body: [`console.dir(${Placeholders.Message})`],
  description: 'Prints a JavaScript representation of the specified object',
};

const consoleError: SnippetType = {
  key: 'consoleError',
  prefix: 'cer',
  body: [`console.error(${Placeholders.Message})`],
  description:
    'Displays a message in the console and also includes a stack trace from where the method was called',
};

const consoleGroup: SnippetType = {
  key: 'consoleGroup',
  prefix: 'cgr',
  body: [`console.group('${Placeholders.Message}')`],
  description:
    'Groups and indents all following output by an additional level, until console.groupEnd() is called.',
};

const consoleGroupEnd: SnippetType = {
  key: 'consoleGroupEnd',
  prefix: 'cge',
  body: ['console.groupEnd()'],
  description: 'Closes out the corresponding console.group().',
};

const consoleLog: SnippetType = {
  key: 'consoleLog',
  prefix: 'clg',
  body: [`console.log(${Placeholders.Message})`],
  description: 'Displays a message in the console',
};

const consoleTrace: SnippetType = {
  key: 'consoleTrace',
  prefix: 'ctr',
  body: [`console.trace(${Placeholders.Message})`],
  description: 'Prints a stack trace from the point where the method was called',
};

const consoleLogObject: SnippetType = {
  key: 'consoleLogObject',
  prefix: 'clo',
  body: [`console.log('${Placeholders.Message}', ${Placeholders.Message})`],
  description: 'Logs property with name.',
};

const consoleLogJson: SnippetType = {
  key: 'consoleLogJson',
  prefix: 'clj',
  body: [
    `console.log('${Placeholders.Message}', JSON.stringify(${Placeholders.Message}, null, 2))`,
  ],
  description: 'Logs stringified JSON property with name.',
};

const consoleTime: SnippetType = {
  key: 'consoleTime',
  prefix: 'ctm',
  body: [`console.time('${Placeholders.Message}')`],
  description: 'Console time wrapper',
};

const consoleTimeEnd: SnippetType = {
  key: 'consoleTimeEnd',
  prefix: 'cte',
  body: [`console.timeEnd('${Placeholders.Message}')`],
  description: 'Console time end wrapper',
};

const consoleWarn: SnippetType = {
  key: 'consoleWarn',
  prefix: 'cwa',
  body: [`console.warn(${Placeholders.Message})`],
  description:
    'Displays a message in the console but also displays a yellow warning icon along with the logged message',
};

const consoleInfo: SnippetType = {
  key: 'consoleInfo',
  prefix: 'cin',
  body: [`console.info(${Placeholders.Message})`],
  description:
    'Displays a message in the console but also displays a blue information icon along with the logged message',
};

const consoleTable: SnippetType = {
  key: 'consoleTable',
  prefix: 'ctl',
  body: [`console.table([${Placeholders.Message}])`],
  description: 'Logs table to console',
};

export default [
  consoleAssert,
  consoleClear,
  consoleCount,
  consoleDir,
  consoleError,
  consoleGroup,
  consoleGroupEnd,
  consoleLog,
  consoleTrace,
  consoleLogObject,
  consoleLogJson,
  consoleTime,
  consoleTimeEnd,
  consoleWarn,
  consoleInfo,
  consoleTable,
];
