const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const unidad = sequelize.define(
    'unidad',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

//unidad.sync();

module.exports = unidad;