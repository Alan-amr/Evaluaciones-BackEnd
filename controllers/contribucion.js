const {contribucionModel} = require('../models');

const getItems = async (req, res) => {
    try {
        const data = await contribucionModel.findAll({});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const getItem = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await contribucionModel.findOne({where: {id: id}});
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}
const postItem = async (req, res) => {
    try {
        const {body} = req;
        const data = await contribucionModel.create(body);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {getItems, postItem, getItem};