const config = require('./config')
const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

mongoose
    .connect(mongoUrl, {})
    .then(() => {
        console.log('mongo polaczone')
    })
    .catch((err) => {
        throw err
    })


const app = express()
app.use(express.json())
app.use(cors())

/* const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/projekt"); */



const eventsRouts = require('./app/routs/customerEvent')()
app.use('/customers', eventsRouts)




/* const hbs = require('express-handlebars'); */
/* app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true })) */

/* const Customer = require('./app/models/CustomerModel')
const customerController = require('./app/controllers/customerController')
const customerEvent = require('./app/routs/customerEvent')




app.get('/customers', customerController.index)
app.get('/customers/add', (_req, res) => { res.render('customersViews/addCustomer') })
app.post('/customers/add', customerController.create)
app.get('/customers/:id', customerController.customer) */



app.listen(config.app.port, () => {
    console.log('Serwer Node.js działa');
});