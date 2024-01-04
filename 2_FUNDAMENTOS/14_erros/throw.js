//Throw: uma forma de encerrar o programa, gerando um novo erro;

const x = '21';

//checar se x é um numero Inteiro
if(!Number.isInteger(x)){
    throw new Error('Erro 404: a variavel não era do type Int');
}

console.log('Continuando código...')