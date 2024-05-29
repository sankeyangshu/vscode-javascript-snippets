/**
 * 代码片段类型
 */
export type SnippetType = {
  key: string;
  prefix: string | string[];
  body: string[];
  description?: string;
  scope?: string;
};

/**
 * 代码片段集合类型
 */
export type SnippetCollectionType = { [key: string]: SnippetType };

/**
 * 占位符
 */
export const Placeholders = {
  ModuleName: 'moduleName',
  Module: 'module',
  Alias: 'alias',
  FunctionName: 'functionName',
  ClassName: 'className',
  BaseClassName: 'baseClassName',
  TypeName: 'typeName',
  Array: 'array',
  Object: 'object',
  Item: 'item',
  Time: 'time',
  Result: 'result',
  Error: 'error',
  Expression: 'expression',
  Params: 'params',
  Data: 'data',
  Value: 'value',
  Label: 'label',
  Message: 'message',
};
