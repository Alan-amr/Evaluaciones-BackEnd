const puesto = require("./puesto");

require("sequelize");

const models = {
    usuarioModel: require('./usuario'),
    puestoModel: require('./puesto')
};

module.exports = models;