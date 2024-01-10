const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const basePath = path.join(__dirname, 'templates');

//ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

//

app.get('/users/add', (req,res)=>{
    res.sendFile(`${basePath}/usersform.html`);
})

app.post('/users/save', (req,res) =>{
    const name = req.body['name'];
    const age = req.body['age'];

    console.log(`
        Usuario: ${name}
        Idade: ${age}
    `)

    res.sendFile(`${basePath}/usersform.html`);
})



app.get('/users/:id', (req,res)=>{
    const id = req.params.id;

    console.log(`Buscando pelo usuario ${id}`);

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, ()=>{
    console.log('Servidor iniciado na porta', port);
})

