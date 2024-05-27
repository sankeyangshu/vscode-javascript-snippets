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
  FunctionName: 'functionName',
  Expression: 'expression',
  Params: 'params',
  Data: 'data',
  Value: 'value',
  Label: 'label',
  Message: 'message',
};
