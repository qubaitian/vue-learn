<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['log'])
const now = ref(new Date().toLocaleTimeString())
let timer

// 组件挂载到页面后执行：适合开定时器、发请求、操作 DOM
onMounted(() => {
  emit('log', 'onMounted：开始计时')
  timer = setInterval(() => (now.value = new Date().toLocaleTimeString()), 1000)
})

// 组件从页面移除时执行：适合清理定时器、取消监听
onUnmounted(() => {
  clearInterval(timer)
  emit('log', 'onUnmounted：停止计时')
})
</script>

<template>
  <p>🕒 {{ now }}</p>
</template>
