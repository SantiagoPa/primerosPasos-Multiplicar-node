const { alias } = require('yargs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
//console.log(argv);
switch(comando){

    case 'listar': listarTabla(argv.base,argv.limite); break;

    case 'crear':crearArchivo(argv.base,argv.limite)
    .then((archivo)=>console.log(`Archivo creado: ${archivo}`))
    .catch(err=>console.log(err));; break;
    
    default: console.log('comando no reconocido');
}
//console.log(argv.base);

/*let argv= process.argv;
let parametro= argv[2];
let base = parametro.split('=')[1];
console.log(base);

*/
