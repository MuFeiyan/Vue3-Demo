// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { repoName } from './src/constants'
import path from 'path'; // 引入 path 模块

// 判断是否为部署环境
const isProd = process.env.NODE_ENV === 'production'
export default defineConfig({
  base: isProd ? `/${repoName}/` : '/', // 区分本地和部署
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 映射 src 目录
    },
  },
})
