module.exports = {
  root: true,
  env: {
    node: true,
    brower: true,
  },
  'extends': [
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
