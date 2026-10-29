<script setup>
import { computed } from 'vue'

// 子组件负责：表格结构、遍历、统计
// 父组件通过插槽决定：名字列怎么显示、操作列放什么按钮、底部写什么、空了显示什么
const props = defineProps({ users: Array })
const totalAge = computed(() => props.users.reduce((sum, u) => sum + u.age, 0))
</script>

<template>
  <table>
    <thead>
      <tr><th>名字</th><th>年龄</th><th>操作</th></tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in props.users" :key="user.id">
        <!-- 具名 + 作用域：名叫 name 的空，并把 user 递出去 -->
        <td><slot name="name" :user="user">{{ user.name }}</slot></td>
        <td>{{ user.age }}</td>
        <!-- 具名 + 作用域：名叫 actions 的空，递出 user 和 index -->
        <td><slot name="actions" :user="user" :index="index" /></td>
      </tr>
      <!-- 只具名、不带数据：名叫 empty 的空 -->
      <tr v-if="props.users.length === 0">
        <td colspan="3"><slot name="empty">没有数据</slot></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <!-- 具名 + 作用域：递出的数据不一定是"某一行"，也可以是子组件算出来的统计值 -->
        <td colspan="3"><slot name="footer" :count="props.users.length" :total-age="totalAge" /></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}
th,
td {
  border: 1px solid #e3e6ea;
  padding: 4px 8px;
  text-align: left;
}
tfoot td {
  background: #fafafa;
  color: #666;
}
</style>
