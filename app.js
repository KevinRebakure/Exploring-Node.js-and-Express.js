const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/input', (req, res) => {
    fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        res.send({
            status: 200,
            data,
        })
    })
})

app.post('/output', (req, res) => {
    fs.writeFile('./output.txt', JSON.stringify(req.body), (err) => {
        if (err) res.status(500).send(err.message)
        res.status(201).send('Updated successfully!👍')
    })
})

app.put('/input', (req, res) => {
    fs.appendFile(
        './input.txt',
        '\n' + JSON.stringify(req.body.user).replace('\"', ''),
        (err) => {
            if (err) {
                res.send(err.message)
            }
        }
    )
    res.send('successful updated✅')
})


const server = http.createServer(app)
const PORT = 3000

server.listen(PORT, () => {
    console.log('Server is listening...')
})
