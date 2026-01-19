import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const useStrict: Snippet = {
  key: 'useStrict',
  prefix: 'uss',
  body: ['use strict'],
  description: 'Insert \'use strict\' Statement',
};

const require: Snippet = {
  key: 'require',
  prefix: 'rqr',
  body: [`require("\${1:${Placeholders.Module}}")`],
  description: 'Require a package',
};

const requireToConst: Snippet = {
  key: 'requireToConst',
  prefix: 'req',
  body: [`const \${1:${Placeholders.ModuleName}} = require('\${2:${Placeholders.Module}}')`],
  description: 'Require a package to const',
};

const moduleExports: Snippet = {
  key: 'moduleExports',
  prefix: 'mde',
  body: ['module.exports = {\n\t$0\n}'],
  description: 'Module exports from Common JS',
};

export default [useStrict, require, requireToConst, moduleExports];
