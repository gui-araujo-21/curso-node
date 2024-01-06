const os = require('os');

console.log(os.cpus());             //quais processadores tem na maquina
console.log(os.freemem());          //quanto de espaco tem da memoria ram (em bytes)
console.log(os.homedir());          //pasta do usuario
console.log(os.type());             //qual o sistema operacional