const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//mudar configuracao
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

//passar aqui
app.engine('handlebars',hbs.engine)

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res)=>{

    const item = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', {item})
})

app.get('/blog', (req,res)=>{
    const posts = [{
        title: 'Dorival Jr. é o novo treinador da seleção Brasileira',
        category: 'Esportes',
        body: 'Bla bla bla bla',
        comments: 213
    },
    {
        title: 'Aprenda Node JS',
        category: 'Programacao',
        body: 'Bla bla bla bla',
        comments: 213
    },
    {
        title: 'Aprenda Python',
        category: 'Programacao',
        body: 'Bla bla bla bla',
        comments: 213
    },
    {
        title: 'Mercado area de TI',
        category: 'Noticias',
        body: 'Bla bla bla bla',
        comments: 213
    }
]

    res.render('blog', {posts})
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
