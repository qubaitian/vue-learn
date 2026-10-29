<!-- v-bind 属性绑定（简写 :） -->
<script setup>
import { ref } from 'vue'

const url = ref('https://cn.vuejs.org')
const color = ref('tomato')
const isBig = ref(true)
</script>

<template>
  <!-- :href 等于 v-bind:href，值是 JS 表达式而不是普通字符串 -->
  <p><a :href="url" target="_blank">Vue 官网</a></p>

  <!-- :style 绑定对象 -->
  <p :style="{ color: color }">这段文字的颜色来自变量 color = {{ color }}</p>

  <!-- :class 绑定对象：值为 true 时加上这个 class -->
  <p :class="{ big: isBig }">isBig 为 {{ isBig }} 时字变大</p>
</template>

<style scoped>
.big {
  font-size: 24px;
  font-weight: bold;
}
</style>
