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

const eventsRouts = require('./app/routs/customerEvent')()
app.use('/customers', eventsRouts)

app.listen(config.app.port, () => {
    console.log('Serwer Node.js działa');
});