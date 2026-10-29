<!-- computed 计算属性 -->
<script setup>
import { ref, computed } from 'vue'

const price = ref(10)
const quantity = ref(2)

// computed：根据别的数据算出来的值，依赖变了会自动重新计算（并且有缓存）
const total = computed(() => price.value * quantity.value)

const todos = ref([
  { text: '学 v-for', done: true },
  { text: '学 computed', done: false },
  { text: '学 watch', done: false },
])
const unfinished = computed(() => todos.value.filter((t) => !t.done))
</script>

<template>
  <p>
    单价 <input type="number" v-model.number="price" style="width: 60px" />
    × 数量 <input type="number" v-model.number="quantity" style="width: 60px" />
    = 总价 <b>{{ total }}</b>
  </p>

  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <label><input type="checkbox" v-model="todo.done" /> {{ todo.text }}</label>
    </li>
  </ul>
  <p>还剩 {{ unfinished.length }} 项没完成</p>
</template>
