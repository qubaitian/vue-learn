<!-- emit 自定义事件（子组件通知父组件） -->
<script setup>
import { ref } from 'vue'
import Counter from './components/Counter.vue'

const message = ref('还没收到事件')

function onChange(value) {
  message.value = `收到 change 事件，值是 ${value}`
}
</script>

<template>
  <!-- 用 @事件名 监听子组件 emit 出来的事件，和监听 @click 一样 -->
  <Counter @change="onChange" @reset="message = '收到 reset 事件'" />
  <p>父组件：{{ message }}</p>
</template>
