import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
  output: {
    file: "public/bundle.js",
    format: "iife",
    name: "main",
  },
  plugins: [
    svelte({ preprocess: autoPreprocess() }),
    typescript(),
    resolve({ browser: true }),
  ],
};
