const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

app.get('/', (req,res)=>{
    res.render('home')
})

app.post('/books/insertbook', (req,res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/books')
    })
})

app.get('/books', (req,res)=>{
    const sql = 'SELECT * FROM books'
    conn.query(sql, (err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const infoBooks = data;
        res.render('books', {infoBooks})
    })
})

app.get('/book/:id',(req,res)=>{
    const idBook = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${idBook}`
    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const infoBook = data[0]
        res.render('book', {infoBook})
    })
})


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodemysql'
})

//obs: no SQL foi necessario escrever e rodar: 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; 
//flush privileges;

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('Conectou ao MySQL')

    app.listen(3000)
})