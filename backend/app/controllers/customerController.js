const CustomerModel = require('../models/CustomerModel');
const customerEvent = require('../routs/customerEvent');

module.exports = {
    index: (req, res) => {
        CustomerModel.find({}).then(
            data => res.send(data)
        ).catch(
            //  err => throw err
        )
    },

    create: (req, res) => {
        const event = new CustomerModel({
            name: req.body.name,
            address: {
                street: req.body.address.street,
                postCode: req.body.address.postCode,
                city: req.body.address.city,
            },
            nip: req.body.nip,
        })
        event.save().then(event => {
            return res.status(201).json(event)
        })
            .catch(err => {
                res.status(500).json({ error: err })
            })
        },
    
        delete: (req, res,) => {
            const id = req.params.id
    
    
            CustomerModel.findByIdAndDelete(id)
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


