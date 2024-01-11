const CustomerEventModel = require("../models/CustomerEventModel");

module.exports = {
  create: (req, res) => {

    const event = new CustomerEventModel({
      description: req.body.description,
      type: {
       enum:req.body.type
      },
      date: req.body.date,
      customer: req.params.id,

    })

    event.save()
      .then(event => {
        console.log(event);
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

  oneEvent: (req, res) => {

    CustomerEventModel.find({ customer: req.params.id })
      .then((respApi) => {
        console.log(respApi);
        res.json(respApi)
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  }
}