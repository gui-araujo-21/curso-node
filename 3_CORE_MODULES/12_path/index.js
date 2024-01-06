const path = require('path');

const customPath = '/documentos/faculdade/matricula.pdf';

console.log(path.dirname(customPath));  //em quais pastas está
console.log(path.basename(customPath)); //qual o arquivo
console.log(path.extname(customPath));  //qual a extensao do arquivo
