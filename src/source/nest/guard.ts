import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestGuard: Snippet = {
  key: 'nest.guard',
  prefix: 'n-guard',
  body: [
    'import { Injectable, CanActivate, ExecutionContext } from \'@nestjs/common\';',
    'import { Observable } from \'rxjs\';',
    'import { Reflector } from \'@nestjs/core\';',
    '',
    '@Injectable()',
    `export class \${1:${Placeholders.First}}Guard implements CanActivate {`,
    '\tconstructor(private readonly reflector: Reflector) {}',
    '',
    '\tcanActivate(context: ExecutionContext):  boolean | Promise<boolean> | Observable<boolean> {',
    '\t\t$0',
    '\t}',
    '}',
  ],
  description: 'NestJS Guard',
};

export default [nestGuard];
