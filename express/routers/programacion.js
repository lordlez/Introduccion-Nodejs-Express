const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// procesar el cuerpo de la solicitud en formato json (Middleware)
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(programacion));

});

// parametros de ruta /:
routerProgramacion.get('/:lenguaje',(req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    // parametros query ?ordenar=vistas
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b)=> a.vistas - b.vistas)));
    }

    res.send(JSON.stringify(resultados));
});


// varios parametros /:
routerProgramacion.get('/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
        // return res.status(404).end(); 
        // end me envia una respuesta vacia
    }

    res.send(JSON.stringify(resultados));
});


routerProgramacion.post('/', (req, res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});


routerProgramacion.put('/:id', (req, res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    // si uso arreglos u objetos de js, res.send automaticamente me lo transforma a un formato json, entonces no hace falta transformarlo con JSON.stringify ,aca lo uso solo por comodidad
    res.send(JSON.stringify(programacion));


    // res.json(programacion)
    // este metodo envia una respuesta en formato json, maneja argumentos que no sean objetos o arreglos y los maneja como formatos json y los envia
});

routerProgramacion.patch('/:id', (req, res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice>=0){
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar, infoActualizada);
    }
    res.send(JSON.stringify(programacion));

});

routerProgramacion.delete('/:id', (req, res)=>{
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice>=0){
        programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
});


module.exports = routerProgramacion;