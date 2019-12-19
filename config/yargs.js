const opc = {
    base: {
        demand: true, //obligatorio
        alias: 'b' //modo corto
    },

    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola las tabla de mulltiplicar', opc)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opc)
    .help()
    .argv;


module.exports = {
    argv
}