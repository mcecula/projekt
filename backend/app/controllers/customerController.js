const CustomerModel = require('../models/CustomerModel');

module.exports = {
    index: (req, res) => {
        res.json({
            customers: {
                name: 'Mariusz Cecula',
                address: {
                    street: 'String',
                    postCode: 'String',
                    city: 'String',
                },
                nip: 'String',
            }
        }
        )
    },

    create: (req, res) => {
        const event = new CustomerModel({
            name: req.body.name,
            address: {
                street: req.body.street,
                postCode: req.body.postCode,
                city: req.body.city,
            },
            nip: req.body.nip,
        })
        /* event.save((err, event) => { */

        event.save().then(res => {
            return res.status(201).json(event)
        })
            .catch(err => {
                res.status(500).json({ error: err })
            })
        /* }) */
    }
}

/*  delete : (req, res) => {
     const id = req.params.id

     CustomerModel.findByIdAndDelete(id)
         .then(() => {
             res.status('200').json({
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
 }),
*/

