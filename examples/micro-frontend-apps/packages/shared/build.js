const fs = require('fs')
const esbuild = require('esbuild')
const path = require('path')
const watch = process.argv[2] === 'watch'
const files = fs.readdirSync('src').map((file) => path.join('src', file))

esbuild
  .build({
    entryPoints: files,
    outdir: '../../dist/shared',
    bundle: true,
    format: 'esm',
    splitting: true,
    watch,
    minify: true,
  })
  .then()
