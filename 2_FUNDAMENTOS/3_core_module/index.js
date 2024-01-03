const path = require('path');


const tipoArquivo = (file)=>{
    console.log(path.extname(file));
}

tipoArquivo('teste.pdf');
tipoArquivo('texto.txt');

