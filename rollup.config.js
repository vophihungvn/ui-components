import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";

const pkg = require("./package.json");

const config = [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      // external(),
      typescript({ useTsconfigDeclarationDir: true }),
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
];

export default config;
