const sequelize = require('../config/sequelize.config');
const { DataTypes } = require('sequelize');

const Employee = sequelize.define('employee', {
  col_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  col_Fname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  col_Mname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  col_Lname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  col_dept: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  col_branch: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  }
});

module.exports = Employee;
