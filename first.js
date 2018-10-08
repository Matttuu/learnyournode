var fs = require('fs')

var readFile = fs.readFileSync(process.argv[2])

var str = readFile.toString().split('\n').length - 1

console.log(str)