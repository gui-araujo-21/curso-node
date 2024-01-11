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

app.listen(port, ()=>{
    console.log('Servidor iniciado na porta', port);
})

