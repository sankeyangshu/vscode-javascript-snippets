import type { Snippet } from '../../types';
import { Placeholders } from '../../types';

const nestV4Module: Snippet = {
  key: 'nest.v4.module',
  prefix: 'n-v4-module',
  body: [
    'import { Module } from \'@nestjs/common\';',
    `import { \${1:${Placeholders.First}}Controller } from './\${2:${Placeholders.Second}}.controller';`,
    `import { \${1:${Placeholders.First}}Service } from './\${2:${Placeholders.Second}}.service';`,
    '',
    '@Module({',
    `\tcontrollers: [\${1:${Placeholders.First}}Controller],`,
    `\tcomponents:[\${1:${Placeholders.First}}Service],`,
    '})',
    `export class \${1:${Placeholders.First}}Module {$0};`,
  ],
  description: 'NestJS Module v4',
};

const nestRootModule: Snippet = {
  key: 'nest.module.root',
  prefix: 'n-module-root',
  body: [
    'import { Module } from \'@nestjs/common\';',
    `import { \${1:${Placeholders.First}}Module } from './\${2:${Placeholders.Second}}.module';`,
    '',
    '@Module({',
    `\tmodules: [\${1:${Placeholders.First}}Module],`,
    '})',
    `export class \${3:${Placeholders.Third}}Module {$0};`,
  ],
  description: 'NestJS Root Module',
};

const nestNestModule: Snippet = {
  key: 'nest.module.nest',
  prefix: 'n-module-nest',
  body: [
    'import { Module, NestModule } from \'@nestjs/common\';',
    `import { \${1:${Placeholders.First}}Module } from './\${2:${Placeholders.Second}}.module';`,
    '',
    '@Module({',
    `\tmodules: [\${1:${Placeholders.First}}Module],`,
    '})',
    `export class \${3:${Placeholders.Third}}Module {`,
    '\tconfigure() {',
    '\t\t$0',
    '\t}',
    '}',
  ],
  description: 'NestJS Module Implementing NestModule',
};

const nestModule: Snippet = {
  key: 'nest.module',
  prefix: 'n-module',
  body: [
    'import { Module } from \'@nestjs/common\';',
    `import { \${1:${Placeholders.First}}Controller } from './\${2:${Placeholders.Second}}.controller';`,
    '',
    '@Module({',
    `\tcontrollers: [\${1:${Placeholders.First}}Controller],`,
    '\tproviders: [],',
    '})',
    `export class \${1:${Placeholders.First}}Module {$0};`,
  ],
  description: 'NestJS Module',
};

const nestGlobalModule: Snippet = {
  key: 'nest.module.global',
  prefix: 'n-module-global',
  body: [
    'import { Module, Global } from \'@nestjs/common\';',
    `import { \${1:${Placeholders.First}}Controller } from './\${2:${Placeholders.Second}}.controller';`,
    '',
    '@Global()',
    '@Module({',
    `\tcontrollers: [\${1:${Placeholders.First}}Controller],`,
    '\tproviders: [],',
    '})',
    `export class \${1:${Placeholders.First}}Module {$0};`,
  ],
  description: 'NestJS Global Module',
};

export default [nestV4Module, nestRootModule, nestNestModule, nestModule, nestGlobalModule];
