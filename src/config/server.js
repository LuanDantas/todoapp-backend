// Express configs, start the server and allocate a door
const port = 3003

// Make the body's parser requisition
const bodyParser = require('body-parser')

// Web Server
const express = require('express')
const server = express()

// Cors
const allowCors = require('./cors')

// Middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server