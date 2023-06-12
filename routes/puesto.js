const express = require("express");
const {postItem, getItems, getItem, putItem} = require("../controllers/puesto");
const router = express.Router()

router.post('/',postItem);
router.get('/',getItems);
router.get('/:id',getItem);
router.put('/:id',putItem);

module.exports = router;