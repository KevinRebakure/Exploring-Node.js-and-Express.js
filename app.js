// create the app and add imports

const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

// 1. READ with GET request

app.get('/input', (req, res) => {
    fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        res.send({
            status: 200,
            data,
        })
    })
})

// 2. CREATE with POST request

app.post('/output', (req, res) => {
    fs.writeFile('./output.txt', JSON.stringify(req.body), (err) => {
        if (err) res.status(500).send(err.message)
        res.status(201).send('Updated successfully!👍')
    })
})

// 3. UPDATE with PUT request

app.put('/input', (req, res) => {
    fs.appendFileSync(
        './input.txt',
        `\n ${JSON.stringify(req.body.message).replaceAll('"', '')}`,
        (err) => {
            if (err) res.status(201).send(err.message)
        }
    )
    res.send('successful updated✅')
})

// 4. DELETE with DELETE request 

app.delete('/input', (req, res) => {
    fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) res.status(500).send(err)
        if (data.includes(req.body.message)) {
            fs.writeFile(
                './input.txt',
                data.replace(req.body.message, '').replace(/^\s*[\r\n]/gm, ''),
                (err) => console.log(err)
            )
            res.status(202).send('Delete request received successfully☑️')
        } else {
            res.send(`No match found! Available names are: \n ${data}`)
        }
    })
})

// create and start the server

const server = http.createServer(app)
const PORT = 3000

server.listen(PORT, () => {
    console.log('Server is listening...')
})
