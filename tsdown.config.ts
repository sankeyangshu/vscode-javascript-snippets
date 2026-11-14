import { execSync } from 'node:child_process';

import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: false,
  entry: ['src/index.ts'],
  deps: {
    neverBundle: ['vscode'],
  },
  format: ['cjs'],
  shims: false,
  hooks(hooks) {
    hooks.hookOnce('build:prepare', () => {
      execSync('pnpm run update', { stdio: 'inherit' });
    });
  },
});
