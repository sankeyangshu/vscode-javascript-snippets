import controllerSnippets from './controller';
import guardSnippets from './guard';
import interceptorSnippets from './interceptor';
import middlewareSnippets from './middleware';
import moduleSnippets from './module';
import mongooseSnippets from './mongoose';
import pipeSnippets from './pipe';
import sequelizeSnippets from './sequelize';
import serviceSnippets from './service';
import testSnippets from './test';
import typeormSnippets from './typeorm';

export const nestSnippets = [
  ...controllerSnippets,
  ...guardSnippets,
  ...interceptorSnippets,
  ...middlewareSnippets,
  ...moduleSnippets,
  ...mongooseSnippets,
  ...pipeSnippets,
  ...sequelizeSnippets,
  ...serviceSnippets,
  ...testSnippets,
  ...typeormSnippets,
];
