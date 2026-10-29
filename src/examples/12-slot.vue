<!-- slot 插槽（父组件把一段内容塞进子组件） -->
<script setup>
import Panel from './components/Panel.vue'
</script>

<template>
  <!-- 中间的内容进入默认插槽 -->
  <Panel>只传了默认插槽，标题用的是默认值</Panel>

  <!-- <template #名字> 往具名插槽里放内容（#title 是 v-slot:title 的简写） -->
  <Panel type="warn">
    <template #title>⚠️ 注意</template>
    插槽里可以放<b>任意 HTML</b>，甚至别的组件。
  </Panel>
</template>
