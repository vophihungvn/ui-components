import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import typescript from "rollup-plugin-typescript";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

const config = [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      external(),
      typescript(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      babel({
        exclude: "node_modules/**",
      }),
      del({ targets: ["dist/" + pkg.main, "dist/" + pkg.module] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: "src/utils.ts",
    output: [
      { file: "dist/utils.cjs.js", format: "cjs" },
      { file: "dist/utils.esm.js", format: "esm" },
    ],
    plugins: [
      external(),
      typescript(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      babel({
        exclude: "node_modules/**",
      }),
      del({ targets: ["dist/utils.cjs.js", "dist/utils.esm.js"] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];

export default config;
