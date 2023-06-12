const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const usuario = sequelize.define(
    'usuario',
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
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        puesto:{
            type: DataTypes.BIGINT,
            allowNull: true
        },
        proyecto:{
            type: DataTypes.BIGINT,
            allowNull: true
        }
    },
    {
        timestamps: true
    }
)

//usuario.sync({force: true})

module.exports = usuario;