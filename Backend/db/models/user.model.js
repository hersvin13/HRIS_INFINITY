const sequelize = require('../config/sequelize.config')
const { DataTypes } = require('sequelize')
const Branch = require('./branch.model')

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'username'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'password'
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Branch.hasMany(User)
User.hasOne(Branch, { foreignKey: 'branchId' })

module.exports = User
