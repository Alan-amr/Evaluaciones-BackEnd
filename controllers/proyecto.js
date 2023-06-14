const {proyectoModel} = require('../models');

const getItems = async (req, res) => {
    try {
        const data = await proyectoModel.findAll({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItem = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await proyectoModel.findOne({where: {id: id}});
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}
const postItem = async (req, res) => {
    try {
        const {body} = req;
        const data = await proyectoModel.create(body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const putItem = async (req, res) => {
    const id = req.params.id
    try {
        const data = await proyectoModel.update(req.body, 
            {where: {id: id}});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getItems, postItem, putItem, getItem};