/*

// con require estoy incluyendo el modulo saludo.js a este   archivo
//const saludos = require('./saludos.js');

// incluir con desestructuracion 
const { saludar, saludarHolaMundo } = require('./saludos.js');

console.log(saludar('Lorenzo'));

console.log(saludarHolaMundo());

*/

//-------------------------------------------------
// Modulo console

/*
console.log('Hola, Mundo!');
console.warn('Error!');
console.error(new Error('Ocurrio un error!'));

*/

//------ Modulo process
//console.log(process);
//console.log(process.env);
//console.log(process.argv[2]);

// for(let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }


//console.log(process.memoryUsage());


//-------------- Modulo OS

//const os = require('os');

//console.log(os.type());
//console.log(os.homedir());
//console.log(os.uptime());
//console.log(os.userInfo());



// --------------- Modulo Timers

// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// setTimeout(mostrarTema, 2000, 'Node.Js');

// function sumar(a, b) {
//     console.log(a+b);
// }

// setTimeout(sumar, 5000, 5,6);

// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema, 'Node.Js');

// console.log('Después de setImmediate()');

// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// setInterval(mostrarTema, 2000, 'Node.Js');

// function sumar(a, b) {
//     console.log(a + b);
// }

// setInterval(sumar, 2000, 3, 4);



// ---------- Modulo fs (son asincronas, salvo que use Sync)
const fs = require('fs');


// Leer un archivo
// fs.readFile('./index.html', 'utf-8', (err, contenido)=>{
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(contenido);
//     }
// });

// Cambiar el nombre a un archivo
// fs.rename('index.html', 'main.html', (err)=> {
//     if(err) {
//         throw err;
//     }
//     console.log('Nombre cambiado exitosamente...');
// });

// Agregar contenido al final de un archivo
// fs.appendFile('index.html', '<p>Hola</p>', (err)=>{
//    if(err) {
//     throw err;
//    } 
//    console.log('Archivo actualizado');
// });

// Reemplazar todo el contenido del archivo
// fs.writeFile('index.html', 'Contenido nuevo', (err)=>{
//     if(err) {
//         throw err;
//     }
//     console.log('Contenido reemplazado');
// });

// Eliminar archivos
// fs.unlink('borrar.html', (err)=>{
//     if(err) {
//         throw err;
//     }
//     console.log('Archivo eliminado');
// });



