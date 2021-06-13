module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // no type-aware rules, yet, since they can't fully handle svelte
    // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
  ],
};