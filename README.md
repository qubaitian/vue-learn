# vue-learn

用一个页面学习 Vue 3 语法：每个语法一个编号示例，左边是运行效果，右边是源码。

```bash
npm install
npm run dev
```

然后打开 http://localhost:5173 。

## 添加新示例

在 `src/examples/` 新建 `NN-名字.vue`，第一行写 `<!-- 标题 -->`，保存后页面会自动出现。
示例用到的子组件放在 `src/examples/components/`，页面会把子组件源码一起显示。

## 目前的示例

1. 文本插值 `{{ }}` 与 `ref`
2. `v-bind` 属性绑定
3. `v-on` 事件监听
4. `v-if` / `v-show` 条件显示
5. `v-for` 列表渲染
6. `v-model` 表单双向绑定（含 `.lazy` `.trim` `.number`）
7. `computed` 计算属性
8. `watch` 侦听
9. `reactive`（对比 `ref`）
10. 组件与 `props`
11. `emit` 自定义事件
12. `slot` 插槽
13. 生命周期 `onMounted` / `onUnmounted`
14. 模板引用 `useTemplateRef`
15. 事件修饰符与按键修饰符
16. `$event` 事件对象与常见原生事件
17. 组件事件与组件上的 `v-model`
18. `v-model` 拆开看
19. `watch` 进阶：侦听来源与选项
20. `watchEffect` 与 `onWatcherCleanup`
21. 作用域插槽
22. 具名插槽 + 作用域插槽一起用
