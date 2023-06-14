const {historialCModel} = require('../models');

const getItems = async (req, res) => {
    try {
        const data = await historialCModel.findAll({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItem = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await historialCModel.findOne({where: {id: id}});
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}
const postItem = async (req, res) => {
    try {
        const {body} = req;
        const data = await historialCModel.create(body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getItems, postItem, getItem};