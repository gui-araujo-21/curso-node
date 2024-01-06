const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            return res.end();
        })
    }else{
        const addName = name + ',\r\n'
        fs.appendFile('arquivo.txt', addName, ()=>{
            res.writeHead(302,{Location: '/'});
        })
    }
})

server.listen(port, ()=>{
    console.log('Servidor iniciado na porta ', port)
})