<script setup>
// 子组件负责：数据从哪来、怎么过滤、列表的外框长什么样
// 每一行具体显示成什么样，交给父组件决定
const props = defineProps({ items: Array, hideDone: Boolean })
</script>

<template>
  <ul class="list">
    <template v-for="(item, index) in props.items" :key="item.id">
      <li v-if="!(hideDone && item.done)">
        <!-- 作用域插槽：把 item 和 index 通过属性"递"给父组件填进来的内容 -->
        <!-- 父组件没填内容时，显示这里的默认内容 -->
        <slot :item="item" :index="index">{{ item.text }}</slot>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.list {
  border: 1px solid #e3e6ea;
  border-radius: 6px;
  padding: 6px 6px 6px 28px;
  margin: 6px 0;
}
</style>
