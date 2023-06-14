const {DataTypes}= require("sequelize");
const {sequelize} = require("./../config/mysql");
const historialC = require("./historialC");
const cliente = require("./cliente");
const evaluacion = require("./evaluaciones");
const colaboraciones = require("./colaboraciones");
const estandar = require("./estandar");

const contribucion = sequelize.define(
    'contribucion',
    {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        hasStandart:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

historialC.hasMany(contribucion, {as: 'contribucion', foreignKey: "Lista_contr"});
contribucion.hasMany(cliente, {as: "lista_clientes", foreignKey:"cliente"});
contribucion.hasMany(colaboraciones, {as: "colaboradores", foreignKey: "colaborador"})
contribucion.hasMany(evaluacion, {as: "evaluaciones", foreignKey:"contribucion"});
contribucion.hasOne(estandar, {as: "EstandarId", foreignKey:"id"});

module.exports = contribucion;