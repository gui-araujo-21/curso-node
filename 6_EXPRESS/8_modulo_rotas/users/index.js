const express = require('express')
const router = express.Router()
const path = require('path');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req,res)=>{
    res.sendFile(`${basePath}/usersform.html`);
})

router.post('/save', (req,res) =>{
    const name = req.body['name'];
    const age = req.body['age'];

    console.log(`
        Usuario: ${name}
        Idade: ${age}
    `)

    res.sendFile(`${basePath}/usersform.html`);
})


router.get('/:id', (req,res)=>{
    const id = req.params.id;

    console.log(`Buscando pelo usuario ${id}`);

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router;