const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
} catch (error) {
    console.log('Não foi possível conectar ao banco: ', error)
}

module.exports = sequelize