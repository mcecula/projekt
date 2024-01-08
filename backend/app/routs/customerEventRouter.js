const express = require("express");
const router = express.Router();

const customerEvent = require("../controllers/customerEventController");
module.exports = () => {

  router.post('/add/events', customerEvent.create)

  router.delete('/delete/events', customerEvent.delete)

  router.get('/:id', customerEvent.oneEvent)

  return router
}