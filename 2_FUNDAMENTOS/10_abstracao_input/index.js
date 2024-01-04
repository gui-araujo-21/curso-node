const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: 'p1', message: 'Digite a primeira nota'
    },
    {
        name: 'p2', message: 'Digite a segunda nota'
    }
]).then((answers)=>{
    let media = (+answers.p1 + +answers.p2)/2;
    console.log('A media é ', media);
}).catch(err => console.log(err))