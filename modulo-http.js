// const http = require('http');
// // creo un servidor (req: solicitud, res: respuesta)
// const servidor = http.createServer((req, res)=>{
//     res.end('Hola mundo!');
// });

// const puerto = 3000;

// servidor.listen(puerto, ()=>{
//     console.log(`El sv esta escuchando en el puerto ${puerto}`);
// });


const http = require('http');
const servidor = http.createServer((req, res)=>{
    // solicitud
    // console.log('==> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // respuesta
    console.log('===> res (respuesta)');
    // console.log(res.statusCode); // 200 todo OK
    // res.statusCode = 404;
    // console.log(res.statusCode); // 404 not found
    // setHeader nos permite configurar elementos de cabecera, info adicional que debo enviar el cliente
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hola, mundo');
});

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});