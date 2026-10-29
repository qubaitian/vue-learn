<!-- $event 事件对象与常见的原生事件 -->
<script setup>
import { ref } from 'vue'

// 事件发生时，浏览器会创建一个"事件对象"，里面记录了这次事件的详细信息
// 比如：哪个元素触发的（target）、按了哪个键（key）、鼠标位置（offsetX）……
const info = ref('还没有事件')

// 写函数名不加括号时，Vue 会自动把事件对象作为第一个参数传进来
function show(e) {
  info.value = `type=${e.type}  target=<${e.target.tagName.toLowerCase()}>`
}
function onKey(e) {
  info.value = `type=${e.type}  key=${e.key}`
}
function onMove(e) {
  info.value = `type=${e.type}  鼠标位置 x=${e.offsetX} y=${e.offsetY}`
}
// 既要传自己的参数又要拿事件对象时，在模板里用 $event
function greet(name, e) {
  info.value = `你好 ${name}，点击位置 x=${e.clientX} y=${e.clientY}`
}
</script>

<template>
  <p class="info">{{ info }}</p>

  <!-- 鼠标事件 -->
  <p>
    <button @click="show">click 单击</button>
    <button @dblclick="show">dblclick 双击</button>
    <button @click="greet('小明', $event)">传参 + $event</button>
  </p>
  <div class="pad" @mousemove="onMove" @mouseleave="info = 'mouseleave 鼠标离开了'">
    mousemove：鼠标在这里移动
  </div>

  <!-- 键盘 / 输入 / 焦点事件 -->
  <p><input placeholder="keydown：按任意键" @keydown="onKey" /></p>
  <p>
    <input
      placeholder="input / focus / blur"
      @input="info = `input：当前值 ${$event.target.value}`"
      @focus="show"
      @blur="show"
    />
  </p>

  <!-- change：失去焦点或选择完成后才触发（input 是每敲一个字都触发） -->
  <p>
    <select @change="info = `change：选了 ${$event.target.value}`">
      <option>苹果</option>
      <option>香蕉</option>
    </select>
  </p>
</template>

<style scoped>
.info {
  font-family: monospace;
  background: #f0f9eb;
  padding: 6px 8px;
  border-radius: 4px;
}
.pad {
  background: #eef;
  padding: 20px;
  margin: 6px 0;
  user-select: none;
}
</style>
