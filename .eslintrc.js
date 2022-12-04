module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs', 
    'plugin:nuxt/recommended'
  ],
  // 校验 .vue 文件
  plugins: ['vue'],
  // 自定义规则
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: false }],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'require-await': 'off',
    camelcase: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
    'vue/html-self-closing': 0,
    'arrow-parens': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-useless-escape': 0,
    'unicorn/escape-case': 0,
  }
}