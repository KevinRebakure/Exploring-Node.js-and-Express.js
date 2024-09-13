// create the app and add imports

const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

// Middleware to act on /api/... routes

function logTimeMiddleWare(req, res) {
    const time = new Date().toLocaleTimeString()
    console.log(`Request received on: ${time}`)
    res.send(`The request was made at ${time}`)
}

app.use('/api', (req, res) => {
    logTimeMiddleWare(req, res)
})

// other routes

app.get('/input', (req, res) => {
    fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        res.send({
            status: 200,
            data,
        })
    })
})

// create and start the server

const server = http.createServer(app)
const PORT = 3000

server.listen(PORT, () => {
    console.log('Server is listening...')
})
