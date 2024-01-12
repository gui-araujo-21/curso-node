const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{

    const user = {
        name: 'Guilherme',
        lastName: 'Araujo',
        age: 21
    }

    const frase = 'Bla bla bla'

    res.render('home', {user:user, frase})
})


app.listen(3000, ()=>{
    console.log('App funcionando!')
})
