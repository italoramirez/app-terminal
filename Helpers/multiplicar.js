const fs = require('fs')
const colors = require('colors')

const createFileTable = async (number = 5, list = false, stop = 10) => {
    try {
        let salida = ''

            console.log(stop)
        for (let i = 0; i <= stop; i++) {
            salida += `${number} x ${i} = ${number * i}\n`
        }

        if (list) {
            console.log('===================='.green)
            console.log(`   Tabla del: ${number}`.blue)
            console.log('===================='.green)
            console.log(colors.rainbow(salida))
        }

        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida)
        return `tabla-${number}.txt`.bgCyan
    } catch (e) {
        throw e
    }

// fs.writeFile(`tabla-${number}.txt`, salida, (err) => {
//     if (err) throw err
//     console.log(`tabla-${number}.txt creado`)
// })
}

module.exports = {
    createFileTable
}
