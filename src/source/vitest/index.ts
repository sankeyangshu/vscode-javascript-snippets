import assertionSnippets from './assertion';
import describeSnippets from './describe';
import expectSnippets from './expect';
import importSnippets from './import';
import itSnippets from './it';
import mockSnippets from './mock';
import setupSnippets from './setup';
import testSnippets from './test';
import typeSnippets from './type';

export const vitestSnippets = [
  ...assertionSnippets,
  ...describeSnippets,
  ...expectSnippets,
  ...importSnippets,
  ...itSnippets,
  ...mockSnippets,
  ...setupSnippets,
  ...testSnippets,
  ...typeSnippets,
];
