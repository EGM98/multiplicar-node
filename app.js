const argv = require('./config/yargs').argv;

//una deconstrucción va entre llaves
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        //Para ejecutar la app se escribe
        //node app --base=6
        break;

    default:
        console.log('No se reconoce el comando');
        break;
}
// //Hacer que el programa reciba parámetros desde consola
// //al ejecutar node se crea una variable de entrono llamada 'procees'
// //no es necesario declararla
// // console.log(process.argv);
// let argv2 = process.argv;

// console.log('Límite', argv.limite);



// let parametro = argv[2];
// //split sirve para pasar un string a un arreglo
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));
// //Para ejecutar la app se escribe
// //node app --base=6