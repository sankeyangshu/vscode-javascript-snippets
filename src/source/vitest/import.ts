import type { Snippet } from '../../types';

const importVitest: Snippet = {
  key: 'import.vitest',
  prefix: 'iv',
  body: ['import { it, expect, describe } from \'vitest\'$0'],
  description: 'essential imports for vitest',
};

const importVitestExtra: Snippet = {
  key: 'import.vitest.extra',
  prefix: 'ive',
  body: ['import { beforeEach, afterEach, it, expect, describe, vi } from \'vitest\'$0'],
  description: 'extra imports for vitest',
};

export default [importVitest, importVitestExtra];
