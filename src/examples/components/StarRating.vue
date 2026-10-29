<script setup>
// 组件的事件不是浏览器自带的，而是组件作者自己用 defineEmits 定义的
// 这个组件对外提供两个事件：
//   update:modelValue —— 分数变了（名字是 Vue 约定好的，配合 v-model 使用）
//   full              —— 打了满分（作者自己起的名字，想叫什么都行）
const props = defineProps({ modelValue: Number })
const emit = defineEmits(['update:modelValue', 'full'])

function rate(n) {
  emit('update:modelValue', n)
  if (n === 5) emit('full')
}
</script>

<template>
  <span class="stars">
    <span v-for="n in 5" :key="n" @click="rate(n)">{{ n <= props.modelValue ? '★' : '☆' }}</span>
  </span>
</template>

<style scoped>
.stars {
  color: #f7ba2a;
  font-size: 22px;
  cursor: pointer;
}
</style>
