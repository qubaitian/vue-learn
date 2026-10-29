<!-- 具名插槽 + 作用域插槽一起用 -->
<script setup>
import { ref } from 'vue'
import UserTable from './components/UserTable.vue'

const initial = [
  { id: 1, name: '小明', age: 18, vip: true },
  { id: 2, name: '小红', age: 20, vip: false },
  { id: 3, name: '小刚', age: 25, vip: false },
]
const users = ref(initial.map((u) => ({ ...u })))

function reset() {
  users.value = initial.map((u) => ({ ...u }))
}
</script>

<template>
  <UserTable :users="users">
    <!-- #名字="{ 接住的数据 }"：填进哪个空 + 接住这个空递出来的数据 -->
    <template #name="{ user }">
      <b>{{ user.name }}</b>
      <span v-if="user.vip" style="color: #e6a23c"> VIP</span>
    </template>

    <template #actions="{ user, index }">
      <button @click="user.age++">+1 岁</button>
      <button @click="users.splice(index, 1)">删除第 {{ index + 1 }} 行</button>
    </template>

    <!-- 只具名、不接数据，和例子 12 一样 -->
    <template #empty>🫙 全删光了</template>

    <!-- 子组件写的是 :total-age，这里接住时变成 totalAge -->
    <template #footer="{ count, totalAge }">
      共 {{ count }} 人，年龄合计 {{ totalAge }}
    </template>
  </UserTable>

  <p><button @click="reset">恢复数据</button></p>
</template>
