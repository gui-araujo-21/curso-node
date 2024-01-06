const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt')); // me passa o caminho completo de onde está o arquivo


//formar path
const midFolder = 'faculdade';
const fileName = 'testando.txt';

const finalPath = path.join('/','documents',midFolder,fileName);

console.log(finalPath); //retorna  \documents\faculdade\testando.txt