const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const historialC = sequelize.define(
    'historialC',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        usuario:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        timestamps: true,
        createdAt: 'Fecha'
    }
)

//historialC.sync();

module.exports = historialC;