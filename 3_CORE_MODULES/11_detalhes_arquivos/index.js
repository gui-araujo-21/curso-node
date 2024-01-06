const fs = require('fs');

fs.stat('arquivo.txt',(err, stats)=>{
    if(err){
        console.log(err);
        return
    }

    console.log(stats.isFile()); // é um arquivo ?
    console.log(stats.isDirectory()); // é uma pasta? 
    console.log(stats.isSymbolicLink()); // é link ? 
    console.log(stats.ctime); // ultima modificacao
    console.log(stats.size); // tamanho
})