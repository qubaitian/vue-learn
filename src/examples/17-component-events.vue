<!-- 组件事件与组件上的 v-model（本质是 prop + update:modelValue 事件） -->
<script setup>
import { ref } from 'vue'
import StarRating from './components/StarRating.vue'

const score1 = ref(3)
const score2 = ref(2)
const tip = ref('')
</script>

<template>
  <!-- 写法一：手动拆开 —— :modelValue 传值进去，@update:modelValue 监听子组件发出的新值 -->
  <p>
    手动写法：
    <StarRating :modelValue="score1" @update:modelValue="(n) => (score1 = n)" />
    {{ score1 }} 分
  </p>

  <!-- 写法二：v-model 是上面写法的简写，编译后完全一样 -->
  <p>
    v-model 写法：
    <StarRating v-model="score2" @full="tip = '🎉 收到 full 事件：打了满分！'" />
    {{ score2 }} 分
  </p>
  <p>{{ tip }}</p>
</template>
