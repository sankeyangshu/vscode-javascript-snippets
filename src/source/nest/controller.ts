import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestController: Snippet = {
  key: 'nest.controller',
  prefix: 'n-controller',
  body: [
    'import { Controller, Get } from \'@nestjs/common\';',
    '',
    `@Controller('\${1:${Placeholders.First}}')`,
    `export class \${2:${Placeholders.Second}}Controller {`,
    '\tconstructor(){}',
    '',
    '\t@Get(){',
    '\t\t$0',
    '\t}',
    '}',
  ],
  description: 'NestJS Controller',
};

export default [nestController];
