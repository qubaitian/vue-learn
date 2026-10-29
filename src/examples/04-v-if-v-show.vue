<!-- v-if / v-else 与 v-show 条件显示 -->
<script setup>
import { ref } from 'vue'

const loggedIn = ref(false)
const score = ref(75)
</script>

<template>
  <button @click="loggedIn = !loggedIn">切换登录状态</button>

  <!-- v-if 为 false 时，元素根本不会出现在 DOM 里 -->
  <p v-if="loggedIn">欢迎回来！</p>
  <p v-else>请先登录</p>

  <!-- v-else-if 可以连着写多个分支 -->
  <p>
    <button @click="score -= 10">-10</button>
    <button @click="score += 10">+10</button>
    分数 {{ score }}：
    <b v-if="score >= 90">优秀</b>
    <b v-else-if="score >= 60">及格</b>
    <b v-else>不及格</b>
  </p>

  <!-- v-show 为 false 时元素还在，只是加了 display: none -->
  <p v-show="loggedIn">（这行用的是 v-show，打开开发者工具能看到它一直在 DOM 里）</p>
</template>
