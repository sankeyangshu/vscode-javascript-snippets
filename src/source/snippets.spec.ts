import { describe, expect, it } from 'vitest';

import { commonSnippets } from './common';
import { nestSnippets } from './nest';
import { reactSnippets } from './react';
import { vitestSnippets } from './vitest';
import { vueSnippets } from './vue';

const groups = {
  common: commonSnippets,
  vue: vueSnippets,
  react: reactSnippets,
  nest: nestSnippets,
  vitest: vitestSnippets,
};

describe('snippets', () => {
  for (const [name, snippets] of Object.entries(groups)) {
    describe(name, () => {
      it('has key, prefix, and body', () => {
        for (const snippet of snippets) {
          expect(snippet.key.trim()).not.toBe('');
          expect(snippet.prefix.trim()).not.toBe('');
          expect(snippet.body.length).toBeGreaterThan(0);
          expect(snippet.body.every((line) => typeof line === 'string')).toBe(true);
        }
      });

      it('has unique keys and prefixes', () => {
        const keys = snippets.map((snippet) => snippet.key);
        const prefixes = snippets.map((snippet) => snippet.prefix);
        expect(new Set(keys).size).toBe(keys.length);
        expect(new Set(prefixes).size).toBe(prefixes.length);
      });
    });
  }
});
