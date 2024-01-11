const express = require('express');
const router = express.Router();
const path = require('path');


const basePath = path.join(__dirname,'../templates')

router.get('/', (req,res)=>{
    res.sendFile(`${basePath}/contatos.html`)
})

router.get('/localizacao', (req,res)=>{
    res.sendFile(`${basePath}/loc.html`)
})
module.exports = router;