

const express = require('express')
const app = express()
const ConnectDB = require('./config/ConnectDB')
const Movie = require('./routes/Movie')

require('dotenv').config()




app.use(express.json())
app.use('/api/movies', Movie)

ConnectDB()
const port = 8000
app.listen(process.env.port, ()=> console.log(`Port is running on Local Host :   ${process.env.port}`))