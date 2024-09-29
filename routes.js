const express = require('express');

const todoController = require('./controller')


const router = express.Router();

router.route('/').get(todoController.getList)
router.route('/').post(todoController.addList)

module.exports = router