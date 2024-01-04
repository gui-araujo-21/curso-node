const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('start',()=>{
    console.log('Durante');
})

console.log('Antes');

eventEmitter.emit('start'); //executa o event

console.log('Depois')