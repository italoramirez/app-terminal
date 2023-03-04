const {createFileTable} = require('./Helpers/multiplicar')
const argv = require('./Config/yargs')
require('colors')

console.clear()
// console.log(process.argv)
console.log(argv)
// console.log('base: yargs', argv.base)

// const [,, arg3 = 'base = 4'] = process.argv
// const [, number = 5] = arg3.split('=')
// console.log(number)

// const number = 2

createFileTable(argv.b, argv.l, argv.h)
    .then(nA => console.log(nA.bgBrightRed, 'Archivo creado'))
    .catch(e => console.log(e))

