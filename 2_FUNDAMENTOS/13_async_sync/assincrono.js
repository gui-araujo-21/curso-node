//Forma assíncrona: o código continua progredindo e em um ponto futuro obtem a resposta da execução assíncrona

const fs = require('fs');

console.log('Inicio');

fs.writeFile('arquivo2.txt','Olá', ()=>{
    setTimeout(() => console.log('Arquivo criado'), 2000);  //Depois de 2 segundos esse codigo é executado,
})                                                         

console.log('Fim'); //Por ser um codigo assincrono, o programa executa essa linha do codigo e só depois dos 2 segudos executa o codigo acima