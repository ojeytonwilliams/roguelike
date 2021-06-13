module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // no type-aware rules, yet, since they can't fully handle svelte
    // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
  ],
  settings: {
    "svelte3/typescript": true, // load TypeScript as peer dependency
  },
};
