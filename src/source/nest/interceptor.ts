import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestInterceptor: Snippet = {
  key: 'nest.interceptor',
  prefix: 'n-interceptor',
  body: [
    'import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from \'@nestjs/common\';',
    'import { Observable } from \'rxjs\';',
    '',
    '@Injectable()',
    `export class \${1:${Placeholders.First}}Interceptor implements NestInterceptor {`,
    '\tintercept(context: ExecutionContext, next: CallHandler): Observable<any> {',
    '\t\t$0',
    '\t}',
    '}',
  ],
  description: 'NestJS Interceptor',
};

export default [nestInterceptor];
