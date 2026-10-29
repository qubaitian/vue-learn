<!-- 模板引用 ref（拿到真实的 DOM 元素） -->
<script setup>
import { ref, useTemplateRef } from 'vue'

// useTemplateRef('名字') 对应模板里 ref="名字" 的元素（Vue 3.5+ 写法）
const inputEl = useTemplateRef('myInput')
const boxEl = useTemplateRef('box')
const size = ref('')

function focusInput() {
  inputEl.value.focus() // .value 就是原生的 <input> DOM 元素
}

function measure() {
  const rect = boxEl.value.getBoundingClientRect()
  size.value = `${Math.round(rect.width)} × ${Math.round(rect.height)}`
}
</script>

<template>
  <p>
    <input ref="myInput" placeholder="点按钮让我获得焦点" />
    <button @click="focusInput">聚焦输入框</button>
  </p>
  <div ref="box" style="background: #eef; padding: 10px">我是一个 div</div>
  <button @click="measure">量一下 div 的大小</button> {{ size }}
</template>
