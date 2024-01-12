const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [{
    id: 1,
    title: 'Mouse',
    price: 20
},
{
    id: 2,
    title: 'Teclado',
    price: 50
},
{
    id: 3,
    title: 'Monitor',
    price: 200
}
]


app.get('/', (req,res)=>{
    res.render('home', {products})
})

app.get('/product/:id', (req, res)=>{
    const product = products[+req.params.id -1]
    console.log(product)
    res.render('product', {product})
})


app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})