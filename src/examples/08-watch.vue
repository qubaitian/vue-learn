<!-- watch 侦听数据变化 -->
<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')
const logs = ref([])

// 当 keyword 变化时执行回调，能拿到新值和旧值
// 适合做"副作用"：发请求、写日志、存 localStorage 等
watch(keyword, (newVal, oldVal) => {
  logs.value.unshift(`"${oldVal}" → "${newVal}"`)
  if (logs.value.length > 5) logs.value.pop()
})
</script>

<template>
  <p><input v-model="keyword" placeholder="输入点什么" /></p>
  <p>最近的变化记录：</p>
  <ul>
    <li v-for="(log, i) in logs" :key="i">{{ log }}</li>
  </ul>
</template>
