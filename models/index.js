require("sequelize");

const models = {
    usuarioModel: require('./usuario'),
    puestoModel: require('./puesto'),
    unidadModel: require('./unidad')
};

module.exports = models;