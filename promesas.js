// const promesaCumplida = false;

// const miPromesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(promesaCumplida){
//             resolve('Promesa cumplida!');
//         }else{
//             reject('Promesa rechazada...'); 
//         }
//     }, 3000);
// });


// const manejarPromesaCumplida = (valor)=>{
//     console.log(valor);
// }

// const manejarPromesaRechazada = (razonRechazo)=>{
//     console.log(razonRechazo);   
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    return estatus;  
}

const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso! Su pizza esta en camino');
        }else{
            reject('Pedido fallido! Vas a tener hambre');
        }
    },3000);
});


// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError)=>{
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError)=>{
        console.log(mensajeDeError);
    })






