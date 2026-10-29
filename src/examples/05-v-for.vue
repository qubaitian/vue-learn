<!-- v-for 列表渲染 -->
<script setup>
import { ref } from 'vue'

const fruits = ref(['苹果', '香蕉', '橙子'])
const users = ref([
  { id: 1, name: '小明', age: 18 },
  { id: 2, name: '小红', age: 20 },
])
</script>

<template>
  <!-- 遍历数组：(元素, 下标) in 数组；:key 必须唯一，帮助 Vue 识别每一项 -->
  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit">{{ index }}. {{ fruit }}</li>
  </ul>
  <button @click="fruits.push('葡萄' + fruits.length)">加一个</button>
  <button @click="fruits.pop()">删最后一个</button>

  <!-- 遍历对象数组，key 用 id -->
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}，{{ user.age }} 岁</li>
  </ul>

  <!-- 遍历数字：n 从 1 开始 -->
  <p><span v-for="n in 5" :key="n">⭐{{ n }} </span></p>
</template>
