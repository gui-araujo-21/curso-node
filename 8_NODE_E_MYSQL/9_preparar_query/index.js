const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]

    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/books')
    })
})

app.get('/books', (req,res)=>{
    const sql = 'SELECT * FROM books'
    pool.query(sql, (err,data)=>{
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
    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', idBook]

    pool.query(sql, data, (err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const infoBook = data[0]
        res.render('book', {infoBook})
    })
})

app.get('/books/edit/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err,data)=>{
        if(err){
            console.log(err)
        }
        const info = data[0]
        res.render('books-edit', {info})
    })
})

app.post('/book/sucess-edited', (req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?;`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req,res) => {
    const id = req.params.id
    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })

})

app.listen(3000)

//obs: no SQL foi necessario escrever e rodar: 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; 
//flush privileges;
