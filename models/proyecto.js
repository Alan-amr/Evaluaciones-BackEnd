const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const proyecto = sequelize.define(
    'proyecto',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        clave:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
);

//proyecto.sync({force: true})

module.exports = proyecto;