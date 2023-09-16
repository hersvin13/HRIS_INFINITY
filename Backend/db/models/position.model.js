const sequelize = require("../config/sequelize.config");
const { DataTypes } = require("sequelize");

const Position = sequelize.define("positions", {
  col_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  col_positionName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Position;
