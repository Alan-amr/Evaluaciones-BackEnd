const {puestoModel} = require('../models');

const postItem = async(req, res) =>{
    const {body} = req;
    try {
        const data = await puestoModel.create(body)
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItems = async(req, res)=>{
    try {
        const data = await puestoModel.findAll({})
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItem = async(req, res)=>{
    const id = req.params.id;
    try {
        const data = await puestoModel.findByPk(id)
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const putItem = async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const data = await puestoModel.update(body, {where: {id: id}})
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {postItem, getItems, getItem, putItem};