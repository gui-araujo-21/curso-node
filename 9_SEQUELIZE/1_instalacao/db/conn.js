const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('nodesequelize', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso com o Sequelize')
} catch (error) {
    console.log('Não foi possível conectar, erro: ', error)
}

module.exports = sequelize