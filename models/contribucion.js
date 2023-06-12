const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");

const contribucion = sequelize.define(
    'contribucion',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
        }
    },
    {
        timestamps: true
    }
)

//contribucion.sync();

module.exports = contribucion;