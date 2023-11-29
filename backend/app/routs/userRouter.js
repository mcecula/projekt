const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

module.exports = () => {

    router.post('/login', userController.login);

    return router
}