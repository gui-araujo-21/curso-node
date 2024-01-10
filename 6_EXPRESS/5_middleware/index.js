//npm install --save-dev nodemon

const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

//middleware é utilizado sempre no meio de aplicacoes, por exemplo verificar se o usuario está logado.

const checkAuth = (req, res, next)=>{
    req.authStatus = true;

    if(req.authStatus){
        console.log('Está logado, pode continuar!');
        next();
    }else{
        console.log('Não está logado, faça o login.');
    }

}

app.use(checkAuth); //é chamado através do use();

const basePath = path.join(__dirname, 'templates');

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
    console.log('Servidor iniciado na porta', port);
})

