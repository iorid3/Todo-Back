const express = require('express');
const router = express.Router();
const { getTodo,update,getOne } = require('../controller/todo')
const authorizeUser = require('../auth/auth') 

router.get('/getTodo',authorizeUser,getTodo)
router.post('/update:title',update)
router.get('/getone:title',getOne)


module.exports = router;