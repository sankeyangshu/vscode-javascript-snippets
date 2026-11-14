import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SnippetString, type CompletionItem, type ExtensionContext } from 'vscode';

import { SnippetManager } from './core';
import describeSnippets from './source/vitest/describe';
import itSnippets from './source/vitest/it';
import type { ConfigCache, SnippetDefinition } from './types';

const providers = vi.hoisted(() => ({
  current: undefined as ((document: { languageId: string }) => CompletionItem[]) | undefined,
}));

vi.mock('vscode', () => {
  class MockCompletionItem {
    label: string;
    kind?: number;
    filterText?: string;
    insertText?: unknown;
    documentation?: unknown;

    constructor(label: string, kind?: number) {
      this.label = label;
      this.kind = kind;
    }
  }

  class MockSnippetString {
    value: string;

    constructor(value?: string) {
      this.value = value ?? '';
    }
  }

  class MockMarkdownString {
    value: string;

    constructor(value?: string) {
      this.value = value ?? '';
    }
  }

  return {
    CompletionItem: MockCompletionItem,
    CompletionItemKind: { Snippet: 15 },
    SnippetString: MockSnippetString,
    MarkdownString: MockMarkdownString,
    languages: {
      registerCompletionItemProvider(
        _selector: unknown,
        provider: {
          provideCompletionItems: (document: { languageId: string }) => CompletionItem[];
        }
      ) {
        providers.current = provider.provideCompletionItems;
        return { dispose() {} };
      },
    },
    window: {},
    workspace: {},
  };
});

type SnippetManagerInternals = {
  cachedSnippets: Map<string, SnippetDefinition[]>;
  cachedConfig: ConfigCache;
  addSnippetsToItems: (
    items: CompletionItem[],
    framework: string,
    filter?: (prefix: string) => boolean
  ) => void;
  registerCompletionProvider: () => void;
};

function open(manager: SnippetManager): SnippetManagerInternals {
  return manager as unknown as SnippetManagerInternals;
}

function createManager() {
  return new SnippetManager({ subscriptions: [] } as unknown as ExtensionContext);
}

function provide(languageId: string): CompletionItem[] {
  const provideCompletionItems = providers.current;
  if (!provideCompletionItems) {
    throw new Error('completion provider was not registered');
  }
  return provideCompletionItems({ languageId });
}

function registerVitest(enabledFrameworks: string[]) {
  const manager = createManager();
  const api = open(manager);
  api.cachedConfig.enabledFrameworks = enabledFrameworks;
  api.cachedSnippets.set('vitest', [...describeSnippets, ...itSnippets]);
  api.registerCompletionProvider();
}

describe('SnippetManager', () => {
  beforeEach(() => {
    providers.current = undefined;
  });

  describe('vitest language gate', () => {
    it.each(['javascript', 'typescript', 'javascriptreact', 'typescriptreact'])(
      'injects vitest snippets for %s',
      (languageId) => {
        registerVitest(['vitest']);
        const items = provide(languageId);
        const byLabel = new Map(items.map((item) => [item.label, item.filterText]));

        expect(byLabel.get('it')).toBe('it');
        expect(byLabel.get('desc')).toBe('desc');
        expect(byLabel.has('i')).toBe(false);
        expect(byLabel.has('d')).toBe(false);

        const itItem = items.find((item) => item.label === 'it');
        expect(itItem).toBeDefined();
        if (!itItem) return;

        expect(itItem.insertText).toBeInstanceOf(SnippetString);
        if (!(itItem.insertText instanceof SnippetString)) return;
        expect(itItem.insertText.value).toContain("it('");
      }
    );

    it.each(['vue', 'html'])('does not inject vitest snippets for %s', (languageId) => {
      registerVitest(['vitest']);
      expect(provide(languageId).map((item) => item.label)).not.toContain('it');
    });

    it('stays out when vitest is disabled', () => {
      registerVitest([]);
      expect(provide('typescriptreact').map((item) => item.label)).not.toContain('it');
    });
  });

  describe('addSnippetsToItems', () => {
    it('keeps string prefixes as a single item', () => {
      const manager = createManager();
      const api = open(manager);
      api.cachedSnippets.set('vitest', [
        { prefix: 'io', body: ["it.only('')"], description: 'only' },
      ]);

      const items: CompletionItem[] = [];
      api.addSnippetsToItems(items, 'vitest');

      expect(items).toHaveLength(1);
      expect(items[0]?.label).toBe('io');
      expect(items[0]?.filterText).toBe('io');
    });

    it('applies the prefix filter', () => {
      const manager = createManager();
      const api = open(manager);
      api.cachedSnippets.set('react', [
        { prefix: 'rzust', body: ['store'], description: 'store' },
        { prefix: 'rfc', body: ['component'], description: 'component' },
      ]);

      const items: CompletionItem[] = [];
      api.addSnippetsToItems(items, 'react', (prefix) => prefix.startsWith('rzust'));

      expect(items.map((item) => item.label)).toEqual(['rzust']);
      expect(items[0]?.filterText).toBe('rzust');
    });

    it('still applies vue config filters', () => {
      const manager = createManager();
      const api = open(manager);
      api.cachedConfig.vue.uniappCodeSnippets = false;
      api.cachedConfig.vue.vuexCodeSnippets = false;
      api.cachedConfig.vue.useTemplateSnippets = ['vinit'];
      api.cachedSnippets.set('vue', [
        { prefix: 'uni2', body: ['uni'], description: 'uni' },
        { prefix: 'vxstore', body: ['vx'], description: 'vx' },
        { prefix: 'vinit', body: ['init'], description: 'init' },
        { prefix: 'vinit-scss', body: ['scss'], description: 'scss' },
        { prefix: 'vdata', body: ['data'], description: 'data' },
      ]);

      const items: CompletionItem[] = [];
      api.addSnippetsToItems(items, 'vue');

      expect(items.map((item) => item.label)).toEqual(['vinit', 'vdata']);
    });

    it('prepends the react import once', () => {
      const manager = createManager();
      const api = open(manager);
      api.cachedConfig.react.importReactOnTop = true;
      api.cachedSnippets.set('react', [
        {
          prefix: 'rfc',
          body: [
            'export const ${1:Component} = () => {',
            '\treturn (',
            '\t\t<div />',
            '\t);',
            '};',
          ],
          description: 'component',
        },
      ]);

      const items: CompletionItem[] = [];
      api.addSnippetsToItems(items, 'react');

      expect(items.map((item) => item.label)).toEqual(['rfc']);
      const item = items[0];
      expect(item?.insertText).toBeInstanceOf(SnippetString);
      if (!(item?.insertText instanceof SnippetString)) return;
      expect(item.insertText.value.startsWith("import React from 'react';\n\n")).toBe(true);
      expect(item.insertText.value.match(/import React from 'react';/g)).toHaveLength(1);
    });
  });
});
