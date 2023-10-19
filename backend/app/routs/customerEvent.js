const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

module.exports = () => {

    router.get('/', customerController.index)

    router.post('/add', customerController.create)

     /*  router.delete('/delete/:id', customerController.delete)*/
    return router   
}