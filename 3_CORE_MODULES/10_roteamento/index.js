const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req,res)=>{
    const urlInfo = url.parse(req.url, true);
    const fileName = urlInfo.pathname.substring(1); // sem o substring(1), retornaria com a '/'

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){ //Verificar se existe o arquivo, retorna true ou false
            fs.readFile(fileName, (err, data)=>{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            })
        }
    }
    else{
        fs.readFile('404.html', (err, data)=>{
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
});


server.listen(port, ()=>{
    console.log('Servidor rodando na porta: ', port);
})


