import type { Snippet } from '../../types';
import { Placeholders } from '../../types';
import { exportDefault, reactComponent, reactPureComponent } from './base';

const reactNativeStylesSnippet = ['const styles = StyleSheet.create({})'];

const reactNativeComponentReturn = [
  '  render() {',
  '    return (',
  '      <View>',
  `        <Text>\${1:${Placeholders.First}}</Text>`,
  '      </View>',
  '    )',
  '  }',
];

const reactNativeReturn = [
  '  return (',
  '    <View>',
  `      <Text>\${1:${Placeholders.First}}</Text>`,
  '    </View>',
  '  )',
];

const reactNativeImport: Snippet = {
  key: 'react.native.import',
  prefix: 'imrn',
  body: [`import { \${1:${Placeholders.First}} } from 'react-native'`],
};

const reactNativeStyles: Snippet = {
  key: 'react.native.styles',
  prefix: 'rnstyle',
  body: [`const styles = StyleSheet.create({\${1:${Placeholders.First}}})`],
};

const reactNativeComponent: Snippet = {
  key: 'react.native.component',
  prefix: 'rnc',
  body: [
    'import { Text, View } from \'react-native\'',
    ...reactComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativeComponentWithStyles: Snippet = {
  key: 'react.native.component.styles',
  prefix: 'rncs',
  body: [
    'import { Text, StyleSheet, View } from \'react-native\'',
    ...reactComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeComponentExport: Snippet = {
  key: 'react.native.component.export',
  prefix: 'rnce',
  body: [
    'import { Text, View } from \'react-native\'',
    ...reactComponent,
    '',
    `export class \${1:${Placeholders.FileName}} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativePureComponent: Snippet = {
  key: 'react.native.pure.component',
  prefix: 'rnpc',
  body: [
    'import { Text, View } from \'react-native\'',
    ...reactPureComponent,
    '',
    `export default class \${1:${Placeholders.FileName}} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativePureComponentExport: Snippet = {
  key: 'react.native.pure.component.export',
  prefix: 'rnpce',
  body: [
    'import { Text, View } from \'react-native\'',
    ...reactPureComponent,
    '',
    `export class \${1:${Placeholders.FileName}} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponent: Snippet = {
  key: 'react.native.functional.export.component',
  prefix: 'rnfe',
  body: [
    'import { View, Text } from \'react-native\'',
    '',
    `const \${1:${Placeholders.FileName}} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponentWithStyles: Snippet = {
  key: 'react.native.functional.export.component.styles',
  prefix: 'rnfes',
  body: [
    'import { StyleSheet, Text, View } from \'react-native\'',
    '',
    `const \${1:${Placeholders.FileName}} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeFunctionalComponent: Snippet = {
  key: 'react.native.functional.component',
  prefix: 'rnf',
  body: [
    'import { View, Text } from \'react-native\'',
    '',
    `export default function \${1:${Placeholders.FileName}}() {`,
    ...reactNativeReturn,
    '}',
  ],
};

const reactNativeFunctionalComponentWithStyles: Snippet = {
  key: 'react.native.functional.component.styles',
  prefix: 'rnfs',
  body: [
    'import { StyleSheet, Text, View } from \'react-native\'',
    '',
    `export default function \${1:${Placeholders.FileName}}() {`,
    ...reactNativeReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

export default [
  reactNativeComponent,
  reactNativeComponentExport,
  reactNativeComponentWithStyles,
  reactNativeFunctionalComponent,
  reactNativeFunctionalComponentWithStyles,
  reactNativeFunctionalExportComponent,
  reactNativeFunctionalExportComponentWithStyles,
  reactNativeImport,
  reactNativePureComponent,
  reactNativePureComponentExport,
  reactNativeStyles,
];
