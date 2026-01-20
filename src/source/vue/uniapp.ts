import type { Snippet } from '../../types';
import { Placeholders } from '../../types';
import { data, method, scriptSetup, scriptSetupTS, style, templateView } from './base';

/**
 * uni2 代码片段
 */
const uniappTemplateOptions: Snippet = {
  key: 'uniapp.template.options',
  prefix: 'uni2',
  body: [
    ...templateView,
    '',
    '<script>',
    'export default {',
    ...data,
    ...method,
    '}',
    '</script>',
    '',
    ...style,
  ],
  description: 'Uni-app Options Template',
};

/**
 * uni3 代码片段
 */
const uniappTemplateComposition: Snippet = {
  key: 'uniapp.template.composition',
  prefix: 'uni3',
  body: [...templateView, '', ...scriptSetup, '', ...style],
  description: 'Uni-app Composition Template',
};

/**
 * uni-ts 代码片段
 */
const uniappTemplateTs: Snippet = {
  key: 'uniapp.template.ts',
  prefix: 'uni-ts',
  body: [...templateView, '', ...scriptSetupTS, '', ...style],
  description: 'Uni-app TS Template',
};

/**
 * uniapp options 监听页面加载
 */
const uniappOptionsOnLoad: Snippet = {
  key: 'uniapp.options.onLoad',
  prefix: 'u2onLoad',
  body: [`onLoad(\${1:${Placeholders.First}}) {`, '\t$0', '},'],
  description: 'onLoad 监听页面加载',
};

/**
 * uniapp options 监听页面显示
 */
const uniappOptionsOnShow: Snippet = {
  key: 'uniapp.options.onShow',
  prefix: 'u2onShow',
  body: ['onShow() {', '\t$0', '},'],
  description: 'onShow 监听页面显示',
};

/**
 * uniapp options 监听页面初次渲染完成
 */
const uniappOptionsOnReady: Snippet = {
  key: 'uniapp.options.onReady',
  prefix: 'u2onReady',
  body: ['onReady() {', '\t$0', '},'],
  description: 'onReady 监听页面初次渲染完成',
};

/**
 * uniapp options 监听页面隐藏
 */
const uniappOptionsOnHide: Snippet = {
  key: 'uniapp.options.onHide',
  prefix: 'u2onHide',
  body: ['onHide() {', '\t$0', '},'],
  description: 'onHide 监听页面隐藏',
};

/**
 * uniapp options 监听页面卸载
 */
const uniappOptionsOnUnload: Snippet = {
  key: 'uniapp.options.onUnload',
  prefix: 'u2onUnload',
  body: ['onUnload() {', '\t$0', '},'],
  description: 'onUnload 监听页面卸载',
};

/**
 * uniapp options 监听用户下拉动作，一般用于下拉刷新
 */
const uniappOptionsOnPullDownRefresh: Snippet = {
  key: 'uniapp.options.onPullDownRefresh',
  prefix: 'u2onPullDownRefresh',
  body: ['onPullDownRefresh() {', '\t$0', '},'],
  description: 'onPullDownRefresh 监听用户下拉动作，一般用于下拉刷新',
};

/**
 * uniapp options 页面滚动到底部的事件
 */
const uniappOptionsOnReachBottom: Snippet = {
  key: 'uniapp.options.onReachBottom',
  prefix: 'u2onReachBottom',
  body: ['onReachBottom() {', '\t$0', '},'],
  description: 'onReachBottom 页面滚动到底部的事件',
};

/**
 * uniapp options 监听用户点击右上角转发
 */
const uniappOptionsOnShareAppMessage: Snippet = {
  key: 'uniapp.options.onShareAppMessage',
  prefix: 'u2onShareAppMessage',
  body: ['onShareAppMessage() {', '\t$0', '},'],
  description: 'onShareAppMessage 监听用户点击右上角转发',
};

/**
 * uniapp options 监听页面滚动
 */
const uniappOptionsOnPageScroll: Snippet = {
  key: 'uniapp.options.onPageScroll',
  prefix: 'u2onPageScroll',
  body: ['onPageScroll() {', '\t$0', '},'],
  description: 'onPageScroll 监听页面滚动',
};

/**
 * uniapp composition 监听页面加载
 */
const uniappCompositionOnLoad: Snippet = {
  key: 'uniapp.composition.onLoad',
  prefix: 'u3onLoad',
  body: [`onLoad((\${1:${Placeholders.First}}) => {`, '\t$0', '}),'],
  description: 'onLoad 监听页面加载',
};

/**
 * uniapp composition 监听页面显示
 */
const uniappCompositionOnShow: Snippet = {
  key: 'uniapp.composition.onShow',
  prefix: 'u3onShow',
  body: ['onShow(() => {', '\t$0', '}),'],
  description: 'onShow 监听页面显示',
};

/**
 * uniapp composition 监听页面初次渲染完成
 */
const uniappCompositionOnReady: Snippet = {
  key: 'uniapp.composition.onReady',
  prefix: 'u3onReady',
  body: ['onReady(() => {', '\t$0', '}),'],
  description: 'onReady 监听页面初次渲染完成',
};

/**
 * uniapp composition 监听页面隐藏
 */
const uniappCompositionOnHide: Snippet = {
  key: 'uniapp.composition.onHide',
  prefix: 'u3onHide',
  body: ['onHide(() => {', '\t$0', '}),'],
  description: 'onHide 监听页面隐藏',
};

/**
 * uniapp composition 监听页面卸载
 */
const uniappCompositionOnUnload: Snippet = {
  key: 'uniapp.composition.onUnload',
  prefix: 'u3onUnload',
  body: ['onUnload(() => {', '\t$0', '}),'],
  description: 'onUnload 监听页面卸载',
};

/**
 * uniapp template 代码片段集合
 */
export const uniappTemplateSnippets = [
  uniappTemplateOptions,
  uniappTemplateComposition,
  uniappTemplateTs,
];

/**
 * uniapp script 代码片段集合
 */
export const uniappCollectionSnippets = [
  uniappOptionsOnLoad,
  uniappOptionsOnShow,
  uniappOptionsOnReady,
  uniappOptionsOnHide,
  uniappOptionsOnUnload,
  uniappOptionsOnPullDownRefresh,
  uniappOptionsOnReachBottom,
  uniappOptionsOnShareAppMessage,
  uniappOptionsOnPageScroll,
  uniappCompositionOnLoad,
  uniappCompositionOnShow,
  uniappCompositionOnReady,
  uniappCompositionOnHide,
  uniappCompositionOnUnload,
];
