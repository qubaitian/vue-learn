<!-- 生命周期钩子 onMounted / onUnmounted -->
<script setup>
import { ref } from 'vue'
import Clock from './components/Clock.vue'

const show = ref(true)
const logs = ref([])
</script>

<template>
  <!-- v-if 切换时，子组件会被创建 / 销毁，从而触发生命周期钩子 -->
  <button @click="show = !show">{{ show ? '移除' : '显示' }}时钟</button>
  <Clock v-if="show" @log="(msg) => logs.push(msg)" />
  <ul>
    <li v-for="(log, i) in logs" :key="i">{{ log }}</li>
  </ul>
</template>
