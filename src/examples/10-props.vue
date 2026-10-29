<!-- 组件与 props（父组件给子组件传数据） -->
<script setup>
import { ref } from 'vue'
import UserCard from './components/UserCard.vue'

const age = ref(18)
</script>

<template>
  <!-- 静态字符串直接写；数字、布尔、变量要用 : 绑定 -->
  <UserCard name="小明" :age="age" vip />
  <UserCard name="小红" :age="20" />
  <UserCard name="小刚" />
  <button @click="age++">小明长一岁</button>
</template>
