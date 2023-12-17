const http = require('http');
const cursos = require('./cursos');
// desestructuracion
//const {infoCursos} = require('./cursos');
// reemplazo donde usaba cursos directamente por infoCursos

const servidor = http.createServer((req, res)=>{
    // desestructuracion
    const {method} = req;
    //const metodo = req.method; esto es lo mismo que lo de arriba
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo usado no puede ser manejado por el servidor ${method}`);
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;

    if(path === '/'){
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    }else if(path === '/cursos'){
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/programacion'){
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end('El recurso solicitado no existe');
}

function manejarSolicitudPOST(req, res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });
        req.on('end', ()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);

            // convertir a un objeto de javascript
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        });



        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe');
}

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});
