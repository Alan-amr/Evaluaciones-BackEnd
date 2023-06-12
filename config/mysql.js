const {Sequelize} = require("sequelize");

const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize( database, user, password, {
    host,
    dialect: "mysql"
    });

const dbConect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MYSQL Conexión correcta");
    } catch (error) {
        console.log("MYSQL ERROR DE CONEXIÓN", error);
    }
}

module.exports = {sequelize, dbConect};