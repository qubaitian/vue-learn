<script setup>
defineProps({ type: { type: String, default: 'info' } })
</script>

<template>
  <div class="panel" :class="type">
    <!-- 具名插槽 title，没传内容时显示默认值 -->
    <div class="title"><slot name="title">默认标题</slot></div>
    <!-- 默认插槽：父组件写在标签中间的内容会放到这里 -->
    <slot />
  </div>
</template>

<style scoped>
.panel {
  border-left: 4px solid #409eff;
  background: #ecf5ff;
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 4px;
}
.panel.warn {
  border-color: #e6a23c;
  background: #fdf6ec;
}
.title {
  font-weight: bold;
  margin-bottom: 4px;
}
</style>
