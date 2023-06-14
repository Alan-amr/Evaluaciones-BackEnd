require("sequelize");

const models = {
    usuarioModel: require('./usuario'),
    puestoModel: require('./puesto'),
    unidadModel: require('./unidad'),
    clienteModel: require('./cliente'),
    colaboracionesModel: require('./colaboraciones'),
    contribucionModel: require('./contribucion'),
    estandarModel: require('./estandar'),
    evaluacionesModel: require('./evaluaciones'),
    historialCModel: require('./historialC'),
    proyectoModel: require('./proyecto')
};

module.exports = models;