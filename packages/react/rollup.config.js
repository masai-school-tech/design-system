import ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts", "src/atoms/Color/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [ts()],
  preserveModules: true,
  external: ["react", "@masaischooltech/foundation"],
};
