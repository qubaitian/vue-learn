<!-- 文本插值 {{ }} 与 ref 响应式数据 -->
<script setup>
import { ref } from 'vue'

// ref 创建响应式数据，在 <script> 里用 .value 读写，在模板里直接写名字
const name = ref('Vue')
const count = ref(3)
</script>

<template>
  <p>你好，{{ name }}！</p>
  <!-- {{ }} 里可以写任意 JS 表达式 -->
  <p>{{ count }} × 2 = {{ count * 2 }}</p>
  <p>名字倒过来：{{ name.split('').reverse().join('') }}</p>
</template>
