import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestPipe: Snippet = {
  key: 'nest.pipe',
  prefix: 'n-pipe',
  body: [
    'import { PipeTransform, Injectable, ArgumentMetadata } from \'@nestjs/common\';',
    '',
    '@Injectable()',
    `export class \${1:${Placeholders.First}}Pipe implements PipeTransform {`,
    '  transform(value: any, metadata: ArgumentMetadata) {',
    '    return $0;',
    '  }',
    '}',
  ],
  description: 'NestJS Pipe',
};

export default [nestPipe];
