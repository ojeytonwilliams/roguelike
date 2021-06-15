import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "app/src/main.ts",
  output: {
    file: "app/public/bundle.js",
    format: "iife",
    name: "main",
  },
  plugins: [
    svelte({ preprocess: autoPreprocess() }),
    typescript({ tsconfig: "./app/tsconfig.json" }),
    resolve({ browser: true }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".ts", ".mjs", ".html", ".svelte"], // slight overkill, we only need .ts and .svelte, but it's better to be cautious than to miss files
      exclude: ["node_modules/**"], // this might be overkill in the other direction, since we may accidentally include es5 packages.
    }),
  ],
};
