const http = require("http");

const port = 3000;

const server = http.createServer((req,res)=>{

    res.write('1,2,3 testando...');
    res.end();

})

server.listen(port, () => {
    console.log('Servidor rodando na porta: ', port)
})

//Para deixar o servidor o rodando, é necessario o terminal estar aberto

//Para fechar a execucao do servidor, basta fechar o terminal ou CTRL + C