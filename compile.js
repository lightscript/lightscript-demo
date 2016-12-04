const { spawnSync } = require('child_process')
const babel = require('../lightscript-babel/packages/babel-core')
const transformed = babel.transformFileSync('src/index.js', {
  plugins: [
    require('../babel-plugin-lightscript').default
  ]
})
console.log(transformed.ast.program.body)
console.log(transformed.code)

const { stdout, stderr } = spawnSync('node', ['-e', transformed.code])
console.log(stdout.toString());
console.error(stderr.toString());
