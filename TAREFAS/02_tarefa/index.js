//npm install chalk@4.1.2
//npm install inquirer@8.1.2

const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name:'nome', message:'Digite seu nome: '
    },
    {
        name:'idade', message: 'Digite sua idade: '
    }
]).then((answers)=>{
    if(!answers.nome || !answers.idade){
        throw new Error('Nome e idade são obrigatórios!')
    }
    const resposta = `Olá ${answers.nome}, você tem ${answers.idade} anos!`
    console.log(chalk.bgYellow.black(resposta));

}).catch(err => console.log(err));
