const {estandarModel} = require('../models');

const getItems = async (req, res) => {
    try {
        const data = await estandarModel.findAll({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItem = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await estandarModel.findOne({where: {id: id}});
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}
const postItem = async (req, res) => {
    try {
        const {body} = req;
        const data = await estandarModel.create(body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getItems, postItem, getItem};