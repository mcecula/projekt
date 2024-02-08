const express = require("express");
const router = express.Router();

const customerEvent = require("../controllers/customerEventController");
module.exports = () => {

  router.post('/add/:id', customerEvent.create)

  router.delete('/delete/:id', customerEvent.delete)

  router.get('/:id', customerEvent.allEvents)

  router.put('/edit/:id', customerEvent.editEvent)

  return router
}