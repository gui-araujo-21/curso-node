//const chalk = require('chalk'); Erro ao importar chalk pelo required NA VERSAO ATUAL

import chalk from "chalk"; //Importando dessa forma e adicionando o "type":module no package.json deu certo

const nota = 5;

if(nota >= 7){
    console.log(chalk.green('Parabens, voce foi aprovado!')); // letras com a verde
}else{
    console.log(chalk.bgRed.black('Ficou de recuperacao!')); // background vermelho e letras preta
}