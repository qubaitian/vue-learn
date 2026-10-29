<!-- 作用域插槽（子组件把数据递给插槽内容） -->
<script setup>
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'

const todos = ref([
  { id: 1, text: '学插槽', done: true },
  { id: 2, text: '学作用域插槽', done: false },
  { id: 3, text: '提交代码', done: false },
])
</script>

<template>
  <!-- 不填内容：用子组件里的默认内容 -->
  <TodoList :items="todos" />

  <!-- #default="{ item, index }"：接住子组件通过 <slot :item :index> 递过来的数据 -->
  <!-- 同一个 TodoList 组件，每一行可以长得完全不一样 -->
  <TodoList :items="todos">
    <template #default="{ item, index }">
      {{ index + 1 }}. {{ item.done ? '✅' : '⬜' }} {{ item.text }}
    </template>
  </TodoList>

  <TodoList :items="todos" hide-done>
    <template #default="{ item }">
      <label><input type="checkbox" v-model="item.done" /> {{ item.text }}</label>
      <small>（勾上后会从这个列表消失，因为传了 hide-done）</small>
    </template>
  </TodoList>
</template>
