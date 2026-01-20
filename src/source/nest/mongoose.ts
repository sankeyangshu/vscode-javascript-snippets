import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestMongooseInterface: Snippet = {
  key: 'nest.mongoose.interface',
  prefix: 'n-mongoose-interface',
  body: [
    'import { Document } from \'mongoose\';',
    '',
    `export interface \${1:${Placeholders.First}} extends Document {`,
    `\treadonly \${2:${Placeholders.Second}}: string;`,
    '}',
  ],
  description: 'NestJS Interface for mongoose',
};

export default [nestMongooseInterface];
