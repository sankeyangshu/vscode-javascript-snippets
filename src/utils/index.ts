import consoleSnippets from '../sourceSnippets/console';
import { SnippetCollectionType, SnippetType } from '../types';
import { writeFile } from 'fs';

const getSnippets = () => {
  console.log(consoleSnippets);
  const snippets = [...consoleSnippets].reduce((acc, snippet) => {
    acc[snippet.key] = Object.assign(snippet, {
      ...snippet,
      scope: 'javascript,javascriptreact',
    });
    return acc;
  }, {} as SnippetCollectionType);

  return snippets;
};

export const normalizeSnippet = (snippet: SnippetType, isTS?: boolean) => {
  const [primaryPrefix, ...prefix] =
    typeof snippet.prefix === 'string' ? [snippet.prefix] : snippet.prefix;

  const flaggedPrefix = isTS ? `TS.$$${primaryPrefix}` : `$${primaryPrefix}`;

  const finalPrefix = [primaryPrefix, flaggedPrefix, ...prefix];

  return {
    ...snippet,
    prefix: finalPrefix.join('.'),
  };
};

export const normalizeSnippets = (snippets: SnippetCollectionType, isTS?: boolean) => {
  const normalizedSnippets: SnippetCollectionType = {};

  Object.keys(snippets).forEach((key) => {
    const newKey = /^ts[A-Z]/.test(key) ? key.replace(/^ts/, 'TS ') : key;
    normalizedSnippets[`${isTS ? '🟦' : '🟨'} ${newKey}`] = normalizeSnippet(snippets[key], isTS);
  });

  return normalizedSnippets;
};

export const generateSnippets = () => {
  console.log('first');

  const jsonSnippets = getSnippets();
  console.log('🚀 ~ file: index.ts:45 ~ newPromise ~ jsonSnippets:', jsonSnippets);
  writeFile(
    __dirname + '/../snippets/javascript.json',
    JSON.stringify(jsonSnippets, null, 2),
    (error) => {
      if (error) {
        console.error(error);
      }
    }
  );
};
