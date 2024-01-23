const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address',{
    street:{
        type: DataTypes.STRING,
        require: true
    },
    number:{
        type: DataTypes.STRING,
        require: true
    },
    city:{
        type: DataTypes.STRING,
        require: true
    }
})

Address.belongsTo(User) //Address pertence a User ou Dentro da tabela address quero uma coluna que faca relacao a tabela User

module.exports = Address