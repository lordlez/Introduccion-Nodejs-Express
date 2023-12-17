function saludar(nombre) {
    return `Hola ${nombre}`;
}


function saludarHolaMundo() {
    return '¡Hola Mundo!';
}


// exportar la funcion saludar
// module.exports.saludar = saludar; 

// module.exports.saludarHolaMundo = saludarHolaMundo;

// Esto es equivalente al modo de exportacion de arriba
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
};

