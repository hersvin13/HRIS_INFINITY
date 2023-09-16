const sequelize = require('../config/sequelize.config')
const { DataTypes } = require('sequelize')
const User = require('./user.model')

const Branch = sequelize.define('branch', {
    branchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    branch_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branch_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip_code: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telephone_no: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    designation : {
        type: DataTypes.INTEGER,
        allowNull : true
    }
})

module.exports = Branch
