<script setup>
// defineProps 声明这个组件能接收哪些参数，以及类型、默认值
defineProps({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  vip: Boolean,
})
</script>

<template>
  <div class="card">
    <b>{{ name }}</b> · {{ age }} 岁
    <span v-if="vip" class="vip">VIP</span>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 10px;
  margin: 6px 0;
}
.vip {
  color: #fff;
  background: #e6a23c;
  border-radius: 4px;
  padding: 0 6px;
  font-size: 12px;
}
</style>
