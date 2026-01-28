# Vue Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

<br>

### Vue SFC Template

#### `vinit`

```vue
<template>
  <div>

  </div>
</template>

<script>
export default {
data() {
  return {
    $0
  }
},
methods: {
  $0
},
}
</script>

<style scoped>

</style>
```

| Snippet         | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `vinit-scss`    | Base for Vue Single File Component with SCSS                   |
| `vinit-less`    | Base for Vue Single File Component with Less                   |
| `vinit-sass`    | Base for Vue Single File Component with Sass                   |
| `vinit-stylus`  | Base for Vue Single File Component with Stylus                 |
| `vinit-postcss` | Base for Vue Single File Component with PostCss                |

### Vue Composition API Template

#### `vbase`

```vue
<template>
  <div>

  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
```

| Snippet         | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `vbase-scss`    | Base for Vue File Composition API with SCSS                    |
| `vbase-less`    | Base for Vue File Composition API with Less                    |
| `vbase-sass`    | Base for Vue File Composition API with Sass                    |
| `vbase-stylus`  | Base for Vue File Composition API with Stylus                  |
| `vbase-postcss` | Base for Vue File Composition API with PostCss                 |

### Vue TypeScript Template

#### `vts`

```vue
<template>
  <div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
```

| Snippet         | Purpose                                                        |
| --------------- | -------------------------------------------------------------- |
| `vts-scss`      | Base for Vue Single File Component with Typescript and SCSS    |
| `vts-less`      | Base for Vue Single File Component with Typescript and Less    |
| `vts-sass`      | Base for Vue Single File Component with Typescript and Sass    |
| `vts-stylus`    | Base for Vue Single File Component with Typescript and Stylus  |
| `vts-postcss`   | Base for Vue Single File Component with Typescript and PostCss |

### Template

| Snippet           | Purpose                                 |
| ----------------- | --------------------------------------- |
| `vfor`            | vfor statement                          |
| `vstyle`          | vue inline style binding                |
| `vstyle-obj`      | vue inline style binding, objects       |
| `vclass`          | vue class binding                       |
| `vclass-obj`      | vue class binding                       |
| `vclass-obj-mult` | vue multiple conditional class bindings |
| `von`             | v-on click handler with arguments       |
| `vroutename`      | Named routing link                      |
| `vroutenameparam` | Named routing link w/ params            |
| `vroutepath`      | Path routing link                       |
| `vanim`           | transition component js hooks           |
| `vcomponent`      | component element                       |

### Script

| Snippet            | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| `vdata`            | Vue Component Data                                         |
| `vprops`           | Vue Props with Default                                     |
| `vmethod`          | vue method                                                 |
| `vcomputed`        | computed value                                             |
| `vwatcher`         | vue watcher                                                |
| `vwatcher-options` | vue watcher with options                                   |
| `vfilter`          | vue filter                                                 |
| `vcomponents`      | Import one component into another, within export statement |
| `vemit`            | vue emit                                                   |
| `vnexttick`        | vue nextTick                                               |
| `vset`             | vue set                                                    |
| `vdelete`          | vue delete                                                 |
| `vbeforecreate`    | beforeCreate lifecycle method                              |
| `vcreated`         | created lifecycle method                                   |
| `vbeforemount`     | beforeMount lifecycle method                               |
| `vmounted`         | mounted lifecycle method                                   |
| `vbeforeupdate`    | beforeUpdate lifecycle method                              |
| `vupdated`         | updated lifecycle method                                   |
| `vbeforedestroy`   | beforeDestroy lifecycle method                             |
| `vdestroyed`       | destroyed lifecycle method                                 |
| `vbeforeunmount`   | beforeUnmount lifecycle method                             |
| `vunmounted`       | unmounted lifecycle method                                 |

### Vue Composition API

| Snippet             | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| `v3ref`             | Vue Ref                                          |
| `v3reactive`        | Vue Composition API - reactive                   |
| `v3computed`        | Vue Composition API - computed                   |
| `v3watch`           | Vue Composition API - watcher single source      |
| `v3watch-array`     | Vue Composition API - watch as array             |
| `v3watcheffect`     | Vue Composition API - watchEffect                |
| `v3onmounted`       | Lifecycle hook - onMounted                       |
| `v3onbeforemount`   | Lifecycle hook - onBeforeMount                   |
| `v3onbeforeupdate`  | Lifecycle hook - onBeforeUpdate                  |
| `v3onupdated`       | Lifecycle hook - onUpdated                       |
| `v3onerrorcaptured` | Lifecycle hook - onErrorCaptured                 |
| `v3onunmounted`     | Lifecycle hook - (destroyed) onUnmounted         |
| `v3onbeforeunmount` | Lifecycle hook - (beforeDestroy) onBeforeUnmount |

### Vue Router

| Snippet              | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `vrouter`            | Base for Vue Router                            |
| `vscrollbehavior`    | Vue Router scrollBehavior                      |
| `vbeforeeach`        | Vue Router global guards beforeEach            |
| `vbeforeresolve`     | Vue Router global guards beforeResolve         |
| `vaftereach`         | Vue Router global guards afterEach             |
| `vbeforeenter`       | Vue Router per-route guard beforeEnter         |
| `vbeforerouteenter`  | Vue Router component guards beforeRouteEnter   |
| `vbeforerouteupdate` | Vue Router component guards beforeRouteUpdate  |
| `vbeforerouteleave`  | Vue Router component guards beforeRouteLeave   |
| `vroute-named`       | Vue Router route with per route code-splitting |
| `v3router`           | Vue Router hooks                               |
| `v3route`            | Vue Route hooks                                |

### Vue Vuex

| Snippet      | Purpose             |
| ------------ | ------------------- |
| `vxstore`    | Base for Vuex store |
| `vxgetter`   | vuex getter         |
| `vxmutation` | vuex mutation       |
| `vxaction`   | vuex action         |
| `vxmodule`   | vuex module         |

### Vue Pinia

| Snippet        | Purpose                                |
| -------------- | -------------------------------------- |
| `vpinia`       | Base for Pinia store (Options API)    |
| `vpinia-setup` | Pinia Setup Store (Composition API)    |
| `vgetter`      | Vue Pinia getters                      |
| `vaction`      | Vue Pinia actions                      |

#### `vpinia-setup`

```javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  return {};
});
```

### UniApp Template

#### `uni2`

```vue
<template>
  <view>

  </view>
</template>

<script>
export default {
data() {
  return {
    $0
  }
},
methods: {
  $0
},
}
</script>

<style scoped>

</style>
```

#### `uni3`

```vue
<template>
  <view>

  </view>
</template>

<script setup>

</script>

<style scoped>

</style>
```

#### `uni-ts`

```vue
<template>
  <view>

  </view>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
```

### UniApp Snippets

| Snippet               | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| `u2onLoad`            | onLoad 监听页面加载                                  |
| `u2onShow`            | onShow 监听页面显示                                  |
| `u2onReady`           | onReady 监听页面初次渲染完成                         |
| `u2onHide`            | onHide 监听页面隐藏                                  |
| `u2onUnload`          | onUnload 监听页面卸载                                |
| `u2onPullDownRefresh` | onPullDownRefresh 监听用户下拉动作，一般用于下拉刷新 |
| `u2onReachBottom`     | onReachBottom 页面滚动到底部的事件                   |
| `u2onShareAppMessage` | onShareAppMessage 监听用户点击右上角转发             |
| `u2onPageScroll`      | onPageScroll 监听页面滚动                            |
| `u3onLoad`            | onLoad 监听页面加载 (Composition API)                |
| `u3onShow`            | onShow 监听页面显示 (Composition API)                |
| `u3onReady`           | onReady 监听页面初次渲染完成 (Composition API)       |
| `u3onHide`            | onHide 监听页面隐藏 (Composition API)                |
| `u3onUnload`          | onUnload 监听页面卸载 (Composition API)              |
