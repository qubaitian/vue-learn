<!-- watchEffect 自动收集依赖 与 onWatcherCleanup 清理过期操作 -->
<script setup>
import { ref, watch, watchEffect, onWatcherCleanup } from 'vue'

// ① watchEffect：不用指定侦听谁，回调里用到了哪些响应式数据，就自动侦听哪些
//    而且会立刻执行一次（相当于自带 immediate）
const price = ref(10)
const count = ref(1)
const summary = ref('')
watchEffect(() => {
  summary.value = `watchEffect 执行了：${price.value} × ${count.value} = ${price.value * count.value}`
})

// ② 清理过期操作：模拟搜索，每次请求耗时随机
//    如果上一次请求还没回来、关键词又变了，就把上一次的结果作废，避免旧结果覆盖新结果
const keyword = ref('')
const result = ref('')
const logs = ref([])

function fakeSearch(kw) {
  const ms = 300 + Math.round(Math.random() * 1200)
  return new Promise((resolve) => setTimeout(() => resolve(`「${kw}」的搜索结果（用时 ${ms}ms）`), ms))
}

watch(keyword, async (kw) => {
  if (!kw) return
  let expired = false
  // 下一次 watch 回调执行前（或组件卸载时），Vue 会先调用这里注册的清理函数
  onWatcherCleanup(() => {
    expired = true
  })

  result.value = `搜索「${kw}」中...`
  const data = await fakeSearch(kw)
  if (expired) {
    logs.value.unshift(`丢弃过期结果：${data}`)
    return
  }
  result.value = data
})
</script>

<template>
  <p>
    price <button @click="price++">+1</button> &nbsp; count <button @click="count++">+1</button>
  </p>
  <p>{{ summary }}</p>

  <p><input v-model="keyword" placeholder="快速连续打几个字" /></p>
  <p><b>{{ result }}</b></p>
  <ul>
    <li v-for="(l, i) in logs.slice(0, 5)" :key="i">{{ l }}</li>
  </ul>
</template>
