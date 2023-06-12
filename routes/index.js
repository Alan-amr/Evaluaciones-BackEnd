const express = require("express");
const fs = require("fs");
const router = express.Router();

const PARH_ROUTES = __dirname;

const removeExtension = (filename) => {
    return filename.split('.').shift();
};

fs.readdirSync(PARH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if(name != 'index'){
        console.log(`Cargando Rutas: ${name}`);
        router.use(`/${name}`, require(`./${file}`));
    }
})

module.exports = router