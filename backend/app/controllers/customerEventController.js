const CustomerEventModel = require("../models/CustomerEventModel");

module.exports = {
  create: (req, res) => {

    const event = new CustomerEventModel({
      description: req.body.description,
      type: req.body.type,
      date: req.body.date,
      customer: req.params.id,
    })

    event.save()
      .then(event => {
        return res.status(201).json(event)
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  },

  delete: (req, res) => {
    const id = req.params.id

    CustomerEventModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          id: id,
          deleted: true
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'Error while deleting ',
          error: err
        })
      })
  },

  allEvents: (req, res) => {

    CustomerEventModel.find({ customer: req.params.id })
      .then((respApi) => {
        res.json(respApi)
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  },

  editEvent: (req, res) => {

    let newContent = {}

    if (req.body.description !== '') {
      newContent.description = req.body.description
    }
    if (req.body.type !== '') {
      newContent.type = req.body.type
    }

    if (req.body.date !== '') {
      newContent.date = req.body.date
    }

    CustomerEventModel.findByIdAndUpdate(req.params.id,
      newContent, { returnOriginal: false })

      .then((editRes) => {
        console.log(editRes);
        return res.send(editRes)
      })

      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  }
}