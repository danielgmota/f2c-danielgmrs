// test.js

const f2c = require('./index.js')
console.log(f2c(20))

const tempF = 20
const tempC = f2c(tempF)

if (tempC === -6.66){
	console.log('test ok');
	process.exit(0)
}

console.log('Test fail')
process.exit(1)