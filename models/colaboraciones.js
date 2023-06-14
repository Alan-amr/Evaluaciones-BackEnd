const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");
const usuario = require("./usuario");
const historialC = require("./historialC");

const colaboraciones = sequelize.define(
    'colaboraciones',
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

//colaboraciones.sync();

usuario.belongsToMany(historialC, {through: colaboraciones})
historialC.belongsToMany(usuario, {through: colaboraciones})


module.exports = colaboraciones;