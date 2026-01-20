import { Placeholders } from '../../types';

/**
 * react 导入语句 - 携带类型
 */
export const reactPropTypes = ['import PropTypes from \'prop-types\''];

export const reactComponent = ['import { Component } from \'react\''];

export const reactPureComponent = ['import { PureComponent } from \'react\''];

export const reactWithMemo = ['import { memo } from \'react\''];

/**
 * react 内部组件
 */
export const innerComponent = ['  return (', `    <div>\${1:${Placeholders.First}}</div>`, '  )'];

/**
 * react 内部组件
 */
export const innerComponentReturn = [
  '  render() {',
  '    return (',
  `      <div>\${1:${Placeholders.First}}</div>`,
  '    )',
  '  }',
];

/**
 * export default
 */
export const exportDefault = ['', `export default \${1:${Placeholders.FileName}}`];
