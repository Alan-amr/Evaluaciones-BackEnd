const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");
const usuario = require("./usuario")

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

usuario.hasMany(historialC, {as: 'Historial', foreignKey: 'usuario'});

module.exports = historialC;