const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const nome = args['nome']; // ou args.nome
const idade = args['idade']; // ou args.idade

console.log('Nome:',nome,' Idade: ',idade)

