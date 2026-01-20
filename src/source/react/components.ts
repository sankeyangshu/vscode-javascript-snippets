import type { Snippet } from '../../types';
import { Placeholders } from '../../types';
import {
  exportDefault,
  innerComponent,
  innerComponentReturn,
  reactComponent,
  reactPropTypes,
  reactPureComponent,
  reactWithMemo,
} from './base';

/**
 * react 函数组件
 */
const reactArrowFunctionComponent: Snippet = {
  key: 'react.arrow.function.component',
  prefix: 'rafc',
  body: [
    `export const \${1:${Placeholders.FileName}} = () => {`,
    ...innerComponent,
    '}',
    '',
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system',
};

const reactArrowFunctionComponentWithPropTypes: Snippet = {
  key: 'react.arrow.function.component.proptypes',
  prefix: 'rafcp',
  body: [
    ...reactPropTypes,
    '',
    `const \${1:${Placeholders.FileName}} = props => {`,
    ...innerComponent,
    '}',
    '',
    `\${1:${Placeholders.FileName}}.propTypes = {}`,
    ...exportDefault,
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system with PropTypes',
};

/**
 * react 函数组件 - 默认导出
 */
const reactArrowFunctionExportComponent: Snippet = {
  key: 'react.arrow.function.export.component',
  prefix: 'rafce',
  body: [
    `const \${1:${Placeholders.FileName}} = () => {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system',
};

const reactClassComponentPropTypes: Snippet = {
  key: 'react.class.component.proptypes',
  prefix: 'rccp',
  body: [
    'import PropTypes from \'prop-types\'',
    ...reactComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends Component {`,
    `  static propTypes = {\${2:${Placeholders.Second}}: \${3:${Placeholders.Third}}}`,
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with PropTypes and ES7 module system',
};

const reactClassComponent: Snippet = {
  key: 'react.class.component',
  prefix: 'rcc',
  body: [
    ...reactComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends Component {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportComponent: Snippet = {
  key: 'react.class.export.component',
  prefix: 'rce',
  body: [
    ...reactComponent,
    '',
    `export class \${1:${Placeholders.FileName}} extends Component {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportComponentWithPropTypes: Snippet = {
  key: 'react.class.export.component.proptypes',
  prefix: 'rcep',
  body: [
    'import PropTypes from \'prop-types\'',
    ...reactComponent,
    '',
    `export class \${1:${Placeholders.FileName}} extends Component {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportPureComponent: Snippet = {
  key: 'react.class.export.pure.component',
  prefix: 'rpce',
  body: [
    ...reactPureComponent,
    '',
    `export class \${1:${Placeholders.FileName}} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React pure component class with ES7 module system export',
};

const reactClassPureComponent: Snippet = {
  key: 'react.class.pure.component',
  prefix: 'rpc',
  body: [
    ...reactPureComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React pure component class with ES7 module system',
};

const reactClassPureComponentWithPropTypes: Snippet = {
  key: 'react.class.pure.component.proptypes',
  prefix: 'rpcp',
  body: [
    'import PropTypes from \'prop-types\'',
    ...reactPureComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends PureComponent {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactFunctionMemoComponent: Snippet = {
  key: 'react.function.memo.component',
  prefix: 'rmc',
  body: [
    ...reactWithMemo,
    '',
    `const \${1:${Placeholders.FileName}} = memo(() => {`,
    ...innerComponent,
    '})',
    ...exportDefault,
  ],
  description: 'Creates a React Memo Function Component with ES7 module system',
};

const reactFunctionMemoComponentWithPropTypes: Snippet = {
  key: 'react.function.memo.component.proptypes',
  prefix: 'rmcp',
  body: [
    'import PropTypes from \'prop-types\'',
    ...reactWithMemo,
    '',
    `const \${1:${Placeholders.FileName}} = memo((props) => {`,
    ...innerComponent,
    '})',
    '',
    `\${1:${Placeholders.FileName}}.propTypes = {}`,
    ...exportDefault,
  ],
  description: 'Creates a React Memo Function Component with ES7 module system with PropTypes',
};

const reactFunctionalComponent: Snippet = {
  key: 'react.functional.component',
  prefix: 'rfc',
  body: [
    `export default function \${1:${Placeholders.FileName}}() {`,
    ...innerComponent,
    '}',
    '',
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

const reactFunctionalComponentWithPropTypes: Snippet = {
  key: 'react.functional.component.proptypes',
  prefix: 'rfcp',
  body: [
    ...reactPropTypes,
    '',
    `function \${1:${Placeholders.FileName}}(props) {`,
    ...innerComponent,
    '}',
    '',
    `\${1:${Placeholders.FileName}}.propTypes = {}`,
    ...exportDefault,
    '',
  ],
  description: 'Creates a React Functional Component with ES7 module system with PropTypes',
};

const reactFunctionalExportComponent: Snippet = {
  key: 'react.functional.export.component',
  prefix: 'rfce',
  body: [
    `function \${1:${Placeholders.FileName}}() {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

export default [
  reactArrowFunctionComponent,
  reactArrowFunctionComponentWithPropTypes,
  reactArrowFunctionExportComponent,
  reactClassComponentPropTypes,
  reactClassComponent,
  reactClassExportComponent,
  reactClassExportComponentWithPropTypes,
  reactClassExportPureComponent,
  reactClassPureComponent,
  reactClassPureComponentWithPropTypes,
  reactFunctionMemoComponent,
  reactFunctionMemoComponentWithPropTypes,
  reactFunctionalComponent,
  reactFunctionalComponentWithPropTypes,
  reactFunctionalExportComponent,
];
