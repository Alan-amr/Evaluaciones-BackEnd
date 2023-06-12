const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const puesto = sequelize.define(
    'puesto',
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
        },
        nivel:{
            type: DataTypes.ENUM("Dirección","Logistica","Unidad","Sin Unidad"),
            allowNull: false,
            defaultValue: "Sin Unidad"
        },
        rol:{
            type: DataTypes.ENUM("Admin","Jefe","Empleado"),
            allowNull: false,
            defaultValue: "Empleado"
        }
    }
);

//puesto.sync({force: true})

module.exports = puesto;