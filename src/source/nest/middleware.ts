import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestV4Middleware: Snippet = {
  key: 'nest.v4.middleware',
  prefix: 'n-v4-middleware',
  body: [
    'import { Middleware, NestMiddleware, ExpressMiddleware } from \'@nestjs/common\';',
    '',
    '@Middleware()',
    `export class \${1:${Placeholders.First}}Middleware implements NestMiddleware {`,
    '\tresolve(...args: any[]): ExpressMiddleware {',
    '\t\treturn (req, res, next) => {',
    '\t\t\t$0',
    '\t\t\tnext();',
    '\t\t};',
    '\t}',
    '}',
  ],
  description: 'NestJS Middleware Version 4',
};

const nestMiddleware: Snippet = {
  key: 'nest.middleware',
  prefix: 'n-middleware',
  body: [
    'import { Injectable, NestMiddleware, MiddlewareFunction } from \'@nestjs/common\';',
    '',
    '@Injectable()',
    `export class \${1:${Placeholders.First}}Middleware implements NestMiddleware {`,
    '\tresolve(...args: any[]): MiddlewareFunction {',
    '\t\treturn (req, res, next) => {',
    '\t\t\t$0',
    '\t\t\tnext();',
    '\t\t};',
    '\t}',
    '}',
  ],
  description: 'NestJS Middleware',
};

export default [nestV4Middleware, nestMiddleware];
