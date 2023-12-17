// const curso = require('./curso.json');

// console.log(curso);

let infoCurso = {
    "titulo": "Aprende Node.Js",
    "numVistas": 45455,
    "numLikes": 1235,
    "temas": [
        "JavaScript",
        "Node.Js"
    ],
    "esPublico": true
}

// convierto el objeto a string
let infoCursoJson = JSON.stringify(infoCurso);
console.log(infoCursoJson);
console.log(typeof infoCursoJson);


// convierto string a objeto
let infoCursoObjeto = JSON.parse(infoCursoJson);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);