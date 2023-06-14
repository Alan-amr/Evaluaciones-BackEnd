const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");
const usuario = require("./usuario");
const historialC = require("./historialC");

const cliente = sequelize.define(
    'cliente',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        timestamps: true
    }
)

//cliente.sync();

usuario.belongsToMany(historialC, {through: cliente})
historialC.belongsToMany(usuario, {through: cliente})

module.exports = cliente;