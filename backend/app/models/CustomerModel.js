const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Customer = new Schema({
    name: { type: String, /* required: true */ },
    address: {
        street: { type: String, /* required: true */ },
        postCode: { type: String, /* required: true  */},
        city: { type: String, /* required: true */ },
    },
    nip: { type: Number },
},
    { timestamps: true }
)

module.exports = mongoose.model('Customer', Customer)