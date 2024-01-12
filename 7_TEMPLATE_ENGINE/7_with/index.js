const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{

    const item = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', {item})
})

app.get('/blog', (req,res)=>{
    const post = {
        title: 'Dorival Jr. é o novo treinador da seleção Brasileira',
        category: 'Esportes',
        body: 'Bla bla bla bla',
        comments: 213
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res)=>{

    const user = {
        name: 'Guilherme',
        lastName: 'Araujo',
        age: 21
    }

    const frase = 'Bla bla bla'

    const auth = false

    const approved = true

    res.render('home', {user:user, frase, auth, approved})
})


app.listen(3000, ()=>{
    console.log('App funcionando!')
})
