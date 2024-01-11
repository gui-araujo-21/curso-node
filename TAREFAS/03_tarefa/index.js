const express = require('express');
const app = express();
const path = require('path')

const port = 5000;
const basePath = path.join(__dirname, 'templates');

app.use(express.static('public'))

const contatos = require('./contatos')

app.use('/contatos', contatos)

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log('Servidor iniciado na porta ', port)
})