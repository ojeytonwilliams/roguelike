import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";

export default {
  input: "app/src/main.ts",
  output: {
    file: "app/public/bundle.js",
    format: "iife",
  },
  plugins: [
    svelte({ preprocess: autoPreprocess() }),
    typescript({ tsconfig: "./app/tsconfig.json" }),
    resolve({ browser: true }),
    commonjs(), // we need this because core-js polyfills are require'd
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".ts", ".mjs", ".html", ".svelte"], // slight overkill, we only need .ts and .svelte, but it's better to be cautious than to miss files
      exclude: ["node_modules/**"], // this might be overkill in the other direction, since we may accidentally include es5 packages.
      // including node_modules in general incurs a large bundle overhead, but if you're serious
      // about supporting older browsers that's necessary.  I should revisit this when it's more
      // than a toy app. https://github.com/obahareth/are-you-es5 might help!
    }),
    livereload(),
  ],
};
