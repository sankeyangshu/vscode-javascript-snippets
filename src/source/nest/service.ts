import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestProvider: Snippet = {
  key: 'nest.provider',
  prefix: 'n-provider',
  body: [
    'import { Injectable } from \'@nestjs/common\';',
    '',
    '@Injectable()',
    `export class \${1:${Placeholders.First}}Service {`,
    '\tconstructor() {}',
    '\t$0',
    '}',
  ],
  description: 'NestJS Provider',
};

const nestMongooseService: Snippet = {
  key: 'nest.mongoose.service',
  prefix: 'n-mongoose-service',
  body: [
    'import { Model } from \'mongoose\';',
    'import { Injectable, Inject } from \'@nestjs/common\';',
    'import { InjectModel } from \'@nestjs/mongoose\';',
    '',
    `import { Create\${1:${Placeholders.First}}Dto } from './dto/create-\${2:${Placeholders.Second}}.dto';`,
    `import { \${1:${Placeholders.First}} } from './interfaces/\${2:${Placeholders.Second}}s.interface';`,
    `import { \${1:${Placeholders.First}}Schema } from './schemas/\${2:${Placeholders.Second}}s.schema';`,
    '',
    '@Injectable()',
    'export class UsersService {',
    `\tconstructor(@InjectModel(\${1:${Placeholders.First}}Schema) private readonly \${2:${Placeholders.Second}}Model: Model<\${1:${Placeholders.First}}>) {}`,
    '\tasync findAll () {',
    `\t\treturn await this.\${2:${Placeholders.Second}}Model.find().exec()`,
    '\t}',
    '}',
  ],
  description: 'NestJS Service for Mongoose',
};

export default [nestProvider, nestMongooseService];
