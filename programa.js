// const EventEmitter = require('events');
// console.log(EventEmitter);


const EventEmitter = require('events');
const emisorProductos = new EventEmitter();
emisorProductos.on('compra', (total, numProductos)=> {
    console.log(`Cantidad de productos: ${numProductos}`);
    console.log(`Se realizo una compra por ${total} dolares`);
});

emisorProductos.emit('compra', 500, 120);



