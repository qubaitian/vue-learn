<script setup>
import { ref } from 'vue'

// defineEmits 声明这个组件会发出哪些事件
const emit = defineEmits(['change', 'reset'])
const count = ref(0)

function add(n) {
  count.value += n
  emit('change', count.value) // 发出事件，并带上数据
}
function reset() {
  count.value = 0
  emit('reset')
}
</script>

<template>
  <span>子组件：{{ count }} </span>
  <button @click="add(1)">+1</button>
  <button @click="add(10)">+10</button>
  <button @click="reset">重置</button>
</template>
