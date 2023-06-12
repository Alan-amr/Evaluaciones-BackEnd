const express = require("express");
const {getUsers, postUser, putUser, getUser} = require("../controllers/usuario.js");
const router = express.Router();

router.get('/',getUsers);
router.get('/:clave',getUser)
router.post('/',postUser);
router.put('/:clave',putUser)

module.exports = router;