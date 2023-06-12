const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const estandar = sequelize.define(
    'estandar',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        numero:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        contribucion:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        rol:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        indicador:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        cliente:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        col_requerida:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        ponderacion:{
            type: DataTypes.INTEGER
        },
        evaluacion:{
            type: DataTypes.INTEGER
        },
        autoevaluacion:{
            type: DataTypes.INTEGER
        },
        contribucionId:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

//estandar.sync();

module.exports = estandar;