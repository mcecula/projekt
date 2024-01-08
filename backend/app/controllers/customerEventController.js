const CustomerEventModel = require("../models/CustomerEventModel");

module.exports = {
  create: (req, res) => {
    console.log(req.params.id);
    const event = new CustomerEventModel({
      description: req.body.description,
      type: {
        enum: req.body.type.enum
      },
      date: req.body.date,
      customer: req.body.ObjectId,
      /* {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      }, */
    })
    event.save().then(event => {
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
    CustomerEventModel.findById(req.params.id)
      .then((respApi) => {
        res.json(respApi)
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  }
}