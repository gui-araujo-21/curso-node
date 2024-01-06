const fs = require('fs');

const newDir = 'logs'
if(!fs.existsSync(`./${newDir}`)){ // verifica se já NÃO existe uma pasta com esse nome
    fs.mkdirSync(newDir)           // cria a pasta 
    console.log(`Pasta '${newDir}' criada com sucesso`);
}else{
    console.log(`ERRO: Já existe uma pasta com o nome ${newDir}`)
}