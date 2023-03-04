const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'La base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base es un número'
        }
        return true
    })
    .options('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Define listar la tabla'
    })
    .options('h', {
        alias: 'stop',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Número hasta donde va la secuencia de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.l)) {
            throw 'El número final es un número'
        }
        return true
    })
    .argv

module.exports = argv
