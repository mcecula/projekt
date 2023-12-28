const config = require('./config')
const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser");



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
app.use(cookieParser())

const userRouter = require('./app/routs/userRouter')()
app.use("/user", userRouter);


const eventsRouts = require('./app/routs/customerRouter')()
app.use('/customers', eventsRouts)

const customerEventRouter = require('./app/routs/customerEventRouter')()
app.use('/events', customerEventRouter)

/* app.get('customers/:id', (req, res) => {
    res.send(req.params)
}) */

app.listen(config.app.port, () => {
    console.log('Serwer Node.js działa');
});