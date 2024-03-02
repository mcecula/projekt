const express = require('express');
const SignUpController = require('../controllers/SignUpController');
const router = express.Router()


module.exports = () => {

    router.post('/signup', SignUpController.create);

    return router
}