const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual seu time de futebol favorito? ', (answer)=>{
    if(answer == 'Sao Paulo'){
        console.log('Parabens por torcer para o maior do Brasil');
    }else{
        console.log('Eca, que time ruim')
    }

    readline.close();
})