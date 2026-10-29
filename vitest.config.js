import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 使用带模板编译器的完整版 Vue，这样测试里可以直接写 template: '...'
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  test: {
    environment: 'jsdom', // 模拟浏览器 DOM
    include: ['tests/**/*.test.js'],
  },
})
