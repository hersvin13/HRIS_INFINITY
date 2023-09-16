const sequelize = require("../config/sequelize.config")
const { DataTypes } = require("sequelize")
const User = require("./user.model")

const Notification = sequelize.define("notification",{
    notifId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    notifHeader: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notifBody: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sender: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

// Notification.hasMany(User, {foreignKey: UserId})
// User.hasMany(Notification)

module.exports = Notification
