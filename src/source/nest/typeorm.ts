import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestTypeORMEntity: Snippet = {
  key: 'nest.typeorm.entity',
  prefix: 'n-typeorm-entity',
  body: [
    'import { Entity, PrimaryGeneratedColumn, Column } from \'typeorm\';',
    '',
    '@Entity()',
    `export class \${1:${Placeholders.First}} {`,
    '\t@PrimaryGeneratedColumn()',
    '\tid: number;',
    '',
    '\t@Column()',
    '\t$0: string;',
    '}',
    '',
  ],
  description: 'NestJS TypeORM Entity',
};

const nestTypeORMRepository: Snippet = {
  key: 'nest.typeorm.repository',
  prefix: 'n-typeorm-repository',
  body: [
    'import { EntityRepository, Repository } from \'typeorm\';',
    `import { \${1:${Placeholders.First}} } from '../entity/\${1:${Placeholders.First}}';`,
    '',
    `@EntityRepository(\${1:${Placeholders.First}})`,
    `export class \${1:${Placeholders.First}}Repository extends Repository<\${1:${Placeholders.First}}> {`,
    '\tfindByName(clientName: string) {',
    '\t\treturn this.findOne({ where: {clientName} });',
    '\t}',
    '}',
    '',
  ],
  description: 'NestJS TypeORM Repository',
};

export default [nestTypeORMEntity, nestTypeORMRepository];
