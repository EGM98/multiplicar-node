//al incio se ponen los "required"
//TIPOS DE ARCHIVOS:
//Nativos de NODE
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let j = 1; j <= limite; j++) {
        console.log(`${base} * ${j} = ${base*j}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`);
        });
    });

}

//Para mandar la función a otro archivo se utiliza el
//objeto módulo (module), el cual se crea automáticamente
//y se declara así

module.exports = {
    crearArchivo,
    listarTabla
}

//otra manera de hacerlo es declarar la función como un eexport en lugar
//de un let

// module.exports.crearArchivo=(base)=>{