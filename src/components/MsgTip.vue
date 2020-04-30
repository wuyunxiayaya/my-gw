<!-- 使用方法2: 使用懒加载容器v-lazy-container,和v-lazy差不多,通过自定义指令去定义的，不过v-lazy-container扫描的是内部的子元素 -->
<template>
  <div v-lazy-container="{ selector: 'img'}">
    <img data-src="/static/1.jpeg">
    <img data-src="/static/2.jpg">
<!--    <img data-src="/static/mobile/bohai/p13/bg.jpg">-->
  </div>
</template>
