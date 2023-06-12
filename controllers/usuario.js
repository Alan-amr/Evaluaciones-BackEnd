const {usuarioModel} = require('../models');

const getUsers = async (req, res) => {
    try {
        const data = await usuarioModel.findAll({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getUser = async(req, res) =>{
    const clave = req.params.clave;
    try {
        const data = await usuarioModel.findOne({where: {clave: clave}});
    } catch (error) {
        
    }
}
const postUser = async (req, res) => {
    try {
        const {body} = req;
        const data = await usuarioModel.create(body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const putUser = async (req, res) => {
    const clave = req.params.clave
    try {
        const data = await usuarioModel.update(req.body, 
            {where: {clave: clave}});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getUsers, postUser, putUser, getUser};