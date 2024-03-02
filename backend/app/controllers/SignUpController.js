const SignUpModel = require("../models/SignUpModel")


module.exports = {

    create: (req, res) => {
        const event = new SignUpModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        event.save().then(event => {
            return res.status(201).json(event)
        })
            .catch(err => {
                res.status(500).json({ error: err })
            })
    },
}