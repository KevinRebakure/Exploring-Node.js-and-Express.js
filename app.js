const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

// read the file

app.get('/input', (req, res) => {
    fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        res.send({
            status: 200,
            data,
        })
    })
})

// create the file

app.post('/output', (req, res) => {
    fs.writeFile('./output.txt', JSON.stringify(req.body), (err) => {
        if (err) res.status(500).send(err.message)
        res.status(201).send('Updated successfully!👍')
    })
})

// update the file

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

// delete something from the file

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

const server = http.createServer(app)
const PORT = 3000

server.listen(PORT, () => {
    console.log('Server is listening...')
})
