<!-- v-model 表单双向绑定 -->
<script setup>
import { ref } from 'vue'

const text = ref('')
const agreed = ref(false)
const hobbies = ref([]) // 多个复选框绑到同一个数组
const gender = ref('男')
const city = ref('北京')

const lazyText = ref('')
const trimText = ref('')
const age = ref(0)
</script>

<template>
  <!-- 输入框：输入会改 text，改 text 也会改输入框 -->
  <p><input v-model="text" placeholder="打点字" /> 你输入了：{{ text }}</p>

  <!-- 单个复选框：绑定 true / false -->
  <p><label><input type="checkbox" v-model="agreed" /> 同意协议</label> → {{ agreed }}</p>

  <!-- 多个复选框：选中的 value 会放进数组 -->
  <p>
    <label><input type="checkbox" value="读书" v-model="hobbies" /> 读书</label>
    <label><input type="checkbox" value="跑步" v-model="hobbies" /> 跑步</label>
    <label><input type="checkbox" value="游戏" v-model="hobbies" /> 游戏</label>
    → {{ hobbies }}
  </p>

  <!-- 单选框 -->
  <p>
    <label><input type="radio" value="男" v-model="gender" /> 男</label>
    <label><input type="radio" value="女" v-model="gender" /> 女</label>
    → {{ gender }}
  </p>

  <!-- 下拉框 -->
  <p>
    <select v-model="city">
      <option>北京</option>
      <option>上海</option>
      <option>广州</option>
    </select>
    → {{ city }}
  </p>

  <!-- v-model 修饰符 -->
  <!-- .lazy：失去焦点 / 按回车后才同步（默认每敲一个字都同步） -->
  <p><input v-model.lazy="lazyText" placeholder=".lazy" /> → {{ lazyText }}</p>
  <!-- .trim：自动去掉首尾空格 -->
  <p><input v-model.trim="trimText" placeholder=".trim 前后加空格试试" /> → [{{ trimText }}]</p>
  <!-- .number：把输入转成数字（不加的话拿到的是字符串） -->
  <p>
    <input v-model.number="age" type="text" style="width: 60px" />
    → {{ age }}，类型是 {{ typeof age }}，加 1 等于 {{ age + 1 }}
  </p>
</template>
