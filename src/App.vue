<!-- 自动收集 src/examples/ 下的所有 .vue 文件，按文件名编号排列 -->
<!-- 以后加新语法：只要新建 src/examples/05-xxx.vue，页面就会自动出现第 5 个 -->
<script setup>
const components = import.meta.glob('./examples/*.vue', { eager: true })
// **/ 也收集 examples/components/ 里的子组件源码，用来一起展示
const sources = import.meta.glob('./examples/**/*.vue', { eager: true, query: '?raw', import: 'default' })

const examples = Object.keys(components)
  .sort()
  .map((path) => {
    const raw = sources[path]
    // 每个示例文件第一行写 <!-- 标题 -->，这里取出来当标题
    const title = raw.match(/^<!--\s*(.*?)\s*-->/)?.[1] ?? path
    const num = path.match(/(\d+)-/)?.[1]
    const files = [{ path, code: raw.replace(/^<!--.*?-->\s*/, '') }]
    // 如果示例 import 了 ./components/Xxx.vue，把子组件代码也显示出来
    for (const [, child] of raw.matchAll(/from '\.\/(components\/\w+\.vue)'/g)) {
      const childPath = `./examples/${child}`
      files.push({ path: childPath, code: sources[childPath] })
    }
    return { path, num, title, files, component: components[path].default }
  })
</script>

<template>
  <main>
    <h1>Vue 语法练习</h1>
    <section v-for="ex in examples" :key="ex.path" class="example">
      <h2><span class="num">{{ Number(ex.num) }}</span>{{ ex.title }}</h2>
      <div class="body">
        <div class="demo">
          <div class="label">效果</div>
          <component :is="ex.component" />
        </div>
        <div class="code">
          <template v-for="file in ex.files" :key="file.path">
            <div class="label">代码 · {{ file.path.replace('./', 'src/') }}</div>
            <pre><code>{{ file.code }}</code></pre>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif;
  background: #f6f7f9;
  color: #222;
}
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 64px;
}
h1 {
  color: #42b883;
}
.example {
  background: #fff;
  border: 1px solid #e3e6ea;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 24px;
}
.example h2 {
  margin: 0 0 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.num {
  background: #42b883;
  color: #fff;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  gap: 16px;
}
@media (max-width: 760px) {
  .body {
    grid-template-columns: 1fr;
  }
}
.label {
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
}
.demo {
  border: 1px dashed #cfd5dc;
  border-radius: 8px;
  padding: 12px;
}
.code pre {
  margin: 0 0 12px;
  background: #1e1e2e;
  color: #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.5;
}
</style>
