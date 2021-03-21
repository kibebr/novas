module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    project: './tsconfig.json'
  }
}
