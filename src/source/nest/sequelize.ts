import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestSequelizeEntity: Snippet = {
  key: 'nest.sequelize.entity',
  prefix: 'n-sequelize-entity',
  body: [
    'import { Table, Column, Model } from \'sequelize-typescript\';',
    '',
    '@Table',
    `export class \${1:${Placeholders.First}} extends Model<\${1:${Placeholders.First}}> {`,
    '\t@Column',
    '\tname: string;',
    '',
    '\t@Column',
    '\t$0;',
    '}',
  ],
  description: 'NestJS Sequelize Entity',
};

const nestSequelizeProvider: Snippet = {
  key: 'nest.sequelize.provider',
  prefix: 'n-sequelize-provider',
  body: [
    `import { \${1:${Placeholders.First}} } from './\${2:${Placeholders.Second}}.entity';`,
    '',
    `export const \${2:${Placeholders.Second}}Providers = [`,
    '\t{',
    `\t\tprovide: '\${1:${Placeholders.First}}Repository',`,
    `\t\tuseValue: \${1:${Placeholders.First}},`,
    '\t},',
    '];',
  ],
  description: 'NestJS Sequelize Provider',
};

const nestSequelizeDatabaseProvider: Snippet = {
  key: 'nest.sequelize.database.provider',
  prefix: 'n-sequelize-database-provider',
  body: [
    'import { Sequelize } from \'sequelize-typescript\';',
    `import { \${1:${Placeholders.First}} } from '../\${2:${Placeholders.Second}}s/\${2:${Placeholders.Second}}.entity';`,
    '',
    'export const databaseProviders = [',
    '\t{',
    '\t\tprovide: \'SequelizeToken\',',
    '\t\tuseFactory: async () => {',
    '\t\t\tconst sequelize = new Sequelize({',
    `\t\t\t\tdialect: '\${3:${Placeholders.Third}}',`,
    `\t\t\t\thost: '\${4:${Placeholders.Fourth}}',`,
    `\t\t\t\tport: \${5:${Placeholders.Fifth}},`,
    `\t\t\t\tusername: '\${6:${Placeholders.Sixth}}',`,
    `\t\t\t\tpassword: '\${7}',`,
    '\t\t\t\tdatabase: \'$0\',',
    '\t\t\t});',
    `\t\t\tsequelize.addModels([\${1:${Placeholders.First}}]);`,
    '\t\t\tawait sequelize.sync();',
    '\t\t\treturn sequelize;',
    '\t\t},',
    '\t},',
    '];',
  ],
  description: 'NestJS Sequelize Provider',
};

export default [nestSequelizeEntity, nestSequelizeProvider, nestSequelizeDatabaseProvider];
