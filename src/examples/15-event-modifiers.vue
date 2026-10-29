<!-- 事件修饰符 .stop .prevent .once .self 与按键修饰符 -->
<script setup>
import { ref } from 'vue'

const logs = ref([])
function log(msg) {
  logs.value.unshift(msg)
  if (logs.value.length > 6) logs.value.pop()
}
</script>

<template>
  <!-- .stop：阻止事件冒泡（不会再传给外层的 div） -->
  <div class="box" @click="log('外层 div 被点了')">
    外层 div
    <button @click="log('普通按钮')">普通按钮（会冒泡到外层）</button>
    <button @click.stop="log('.stop 按钮')">.stop 按钮（不冒泡）</button>
  </div>

  <!-- .self：只有直接点在这个元素自己身上才触发，点子元素不算 -->
  <div class="box" @click.self="log('.self：点到了外层自己')">
    点这里空白处会触发 <button>点我不会触发外层</button>
  </div>

  <!-- .prevent：阻止浏览器默认行为（链接不跳转、表单不刷新页面） -->
  <p>
    <a href="https://cn.vuejs.org" @click.prevent="log('.prevent：链接没有跳转')">点这个链接不会跳转</a>
  </p>
  <form @submit.prevent="log('.prevent：表单提交了，但页面没刷新')">
    <button>提交表单</button>
  </form>

  <!-- .once：只触发一次 -->
  <p><button @click.once="log('.once：只有第一次会出现')">.once 按钮（多点几次试试）</button></p>

  <!-- 按键修饰符：只在按下特定键时触发 -->
  <p>
    <input
      placeholder="在这里按 Enter 或 Esc"
      @keyup.enter="log('按了 Enter')"
      @keyup.esc="log('按了 Esc')"
    />
  </p>

  <!-- 系统键 / 鼠标键修饰符 -->
  <p>
    <button @click.ctrl="log('按住 Ctrl 点击')">按住 Ctrl 再点我</button>
    <button @contextmenu.prevent="log('右键点击（菜单被阻止）')">右键点我</button>
  </p>

  <p>日志：</p>
  <ul>
    <li v-for="(l, i) in logs" :key="i">{{ l }}</li>
  </ul>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 8px;
  margin: 6px 0;
  background: #fafafa;
}
</style>
