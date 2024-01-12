const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const users = require('./users')
const basePath = path.join(__dirname, 'templates');

//ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

// arquivos estaticos

app.use(express.static('public'))

app.use('/users', users)


app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
})

//Se nao for encontrado nenhuma rota acima, o programa executa esse middleware
app.use((req,res,next)=>{
    res.status(404)
    res.sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log('Servidor iniciado na porta', port);
})

