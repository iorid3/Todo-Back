const express = require('express');
const router = express.Router();
const { getTodo,update,getRecipebyID } = require('../controller/todo')
const authorizeUser = require('../auth/auth') 

// router.get('/getTodo', authorizeUser, getTodo)
router.get('/getTodo',getTodo)
router.post('/update',update)


module.exports = router;