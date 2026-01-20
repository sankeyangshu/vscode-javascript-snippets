/**
 * 代码片段
 */
export interface Snippet {
  key: string;
  prefix: string | string[];
  body: string[];
  description?: string;
  scope?: string;
}

/**
 * 代码片段定义
 */
export type SnippetDefinition = Omit<Snippet, 'key' | 'scope'>;

/**
 * 代码片段集合类型
 */
export interface SnippetCollection { [key: string]: Snippet }

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
  Should: 'should',
  Group: 'group',
  Number: 'number',
  Delta: 'delta',
  List: 'list',
  KeyPath: 'keyPath',
} as const;

/**
 * React 配置接口
 */
export interface ReactConfig {
  /** 语言范围 */
  languageScopes: string[];
  /** 是否在组件顶部添加 React 导入 */
  importReactOnTop: boolean;
}
/**
 * Vue 配置接口
 */
export interface VueConfig {
  /** 语言范围 */
  languageScopes: string[];
  /** 是否支持 uniapp 代码片段 */
  uniappCodeSnippets: boolean;
  /** 是否支持 vuex 代码片段 */
  vuexCodeSnippets: boolean;
  /** 可用的模板片段列表 */
  useTemplateSnippets: string[];
}

/**
 * 配置缓存
 */
export interface ConfigCache {
  /** 最后更新时间 */
  lastUpdateTime: number;
  /** 用户启用的框架列表 */
  enabledFrameworks: string[];

  /** React 配置 */
  react: ReactConfig;

  /** Vue 配置 */
  vue: VueConfig;
}
