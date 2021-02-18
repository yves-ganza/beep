require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes')

routes(app)

PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})