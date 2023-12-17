function ordenarProducto(producto) {
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de Apple`);
        setTimeout(()=>{
            if(producto == 'iphone'){
                resolve('Ordenando iphone de Apple');
            }else{
                reject('Este producto no esta disponible');
            }
        },2000);
    });
}


function procesarPedido(respuesta) {
    return new Promise((resolve, reject)=>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Gracias por tu compra!');
        },4000);
    });
}

// ordenarProducto('iphone')
//     .then(respuesta => {
//         console.log('Respuesta recivido');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// todas las funciones con async retornan una promesa
async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch(err){
        console.log(err);
    }
}   

realizarPedido('iphone');



