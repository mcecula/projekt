const CustomerEventModel = require("../models/CustomerEventModel");

module.exports = {
  create: (req, res) => {
    console.log(req.params.id);
    /* const event = new CustomerEventModel({
      description: { type: String, required: true },
      type: {
        type: String,
        enum: ["call", "meeting", "email"]
      },
      date: { type: Date, required: true },
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
      },
    })
    event.save().then(event => {
      return res.status(201).json(event)
    })
      .catch(err => {
        res.status(500).json({ error: err })
      }) */
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
}