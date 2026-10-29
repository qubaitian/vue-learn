<!-- reactive 响应式对象（对比 ref） -->
<script setup>
import { ref, reactive } from 'vue'

// ref：什么类型都能包，在 <script> 里要用 .value
const count = ref(0)

// reactive：只能包对象/数组，直接用属性，不需要 .value
const user = reactive({
  name: '小明',
  age: 18,
  tags: ['学生'],
})

function grow() {
  count.value++ // ref 要 .value
  user.age++ // reactive 直接改
}
</script>

<template>
  <p>count（ref）：{{ count }}</p>
  <p>user（reactive）：{{ user.name }}，{{ user.age }} 岁，标签 {{ user.tags.join('、') }}</p>
  <button @click="grow">都 +1</button>
  <button @click="user.tags.push('新标签')">加标签</button>
  <p><input v-model="user.name" /> ← 改名字</p>
</template>
