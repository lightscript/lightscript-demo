const babel = require('../lightscript-babel/packages/babel-core')
const transformed = babel.transformFileSync('src/index.js', {
  plugins: [
    require('../babel-plugin-lightscript').default
  ]
})
console.log(transformed)
console.log(transformed.code)
