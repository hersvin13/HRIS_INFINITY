const sequelize = require("../config/sequelize.config");
const { DataTypes } = require("sequelize");

const Department = sequelize.define("department", {
  col_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  col_departmentName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Department;
