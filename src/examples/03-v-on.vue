<!-- v-on 事件监听（简写 @） -->
<script setup>
import { ref } from 'vue'

const count = ref(0)
const message = ref('')

function sayHi(who) {
  message.value = `你好，${who}！`
}
</script>

<template>
  <!-- 直接写一句表达式 -->
  <button @click="count++">点了 {{ count }} 次</button>
  <button @click="count = 0">清零</button>

  <!-- 调用函数并传参 -->
  <p>
    <button @click="sayHi('小明')">跟小明打招呼</button>
    <button @click="sayHi('小红')">跟小红打招呼</button>
  </p>
  <p>{{ message }}</p>
</template>
