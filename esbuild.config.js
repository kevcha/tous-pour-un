const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/script.js"],
    bundle: true,
    minify: true,
    outdir: "dist",
    watch: process.argv.includes("--watch"),
    plugins: [],
  })
  .catch(() => process.exit(1));
