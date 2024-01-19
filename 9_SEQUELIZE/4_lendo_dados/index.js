const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', async(req,res)=>{
    const info = await User.findAll({raw:true})
    console.log(info)

    res.render('home',{info})
})

app.get('/users/create', (req,res) => {
    res.render('users-create')
})

app.post('/users/create', async (req,res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    newsletter = newsletter == 'on' ? true : false

    await User.create({name, occupation, newsletter})

    res.redirect('/')
})

conn
    .sync()
    .then(()=>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

