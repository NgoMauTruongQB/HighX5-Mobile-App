const express = require('express');
const UserApiControllers = require('../controllers/api/user.controller')
const router = express.Router();

router.get('/', UserApiControllers.getUsers)

// router.post('/',ProductApiControllers.createNewProduct)

// router.patch('/:id', ProductApiControllers.updateById)

// router.delete('/:id', ProductApiControllers.softDeleteById)

module.exports = router