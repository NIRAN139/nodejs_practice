const path = require('path')

console.log(path.sep)

const filepath = path.join('/calc.js')

console.log(filepath)

const absolute = path.resolve(__dirname,'calc.js')

console.log(absolute)
