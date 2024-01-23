const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/Address')

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

app.get('/user/:id', async (req,res)=>{
    const id = req.params.id

    const user = await User.findOne({raw: true, where:{id: id}})
    
    res.render('userview', {user})
})

app.post('/user/remove:id', async(req,res)=>{
    const id = req.params.id
    await User.destroy({where:{id:id}})

    res.redirect('/')
})

app.get('/user/edit/:id', async (req,res)=>{
    const id = req.params.id

    try {
        const user = await User.findOne({ include: Address, where:{id: id}})
        res.render('user-edit', {user: user.get({plain: true}) })
    } catch (error) {
        console.log(error)
    }
})

app.post('/user/update', async(req,res)=>{
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    newsletter = newsletter == 'on' ? true : false

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where:{id: id}})

    res.redirect('/')
})

app.post('/address/create', async(req,res)=>{
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city
    const UserId = req.body.UserId

    const address = {
        street,
        number,
        city,
        UserId
    }

    await Address.create(address)

    res.redirect(`/user/edit/${UserId}`)
})

conn
    //.sync({force:true})praticamente da um reset nos dados da tabela. Usado qnd vai criar outra tabela relacional por exemplo
    .sync()
    .then(()=>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))

