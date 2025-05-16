module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 需结合 eslint-plugin-prettier
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'off', // Prettier 规则作为 ESLint 错误提示
    'vue/multi-word-component-names': 'off' // 可选：关闭组件名多单词限制
  }
}
