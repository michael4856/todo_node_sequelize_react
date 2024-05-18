const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const Todo = sequelize.define("todos",{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        describtion:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        time:{
            type: DataTypes.DATE
        }
    })
    return Todo
}