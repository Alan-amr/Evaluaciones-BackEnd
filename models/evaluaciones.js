const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const evaluacion = sequelize.define(
    'evaluacion',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        tipo:{
            type: DataTypes.ENUM('Cliente','Colaborador'),
            defaultValue: false
        },
        evaluacion:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

//evaluacion.sync();

module.exports = evaluacion;