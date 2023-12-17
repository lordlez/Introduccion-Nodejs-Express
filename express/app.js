const express = require('express');
const app = express();

// con la desestructuracion importo solo lo que esta dentro de las llaves
const {infoCursos} = require('./datos/cursos.js');

// Routers (simplifico la URL con una variable, no uso mas app.algo, uso el routerNombre.algo)

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing (direccionamiento o enrutamiento)
app.get('/', (req, res)=>{
    res.send('Mi primer sevidor con Express');
});

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
