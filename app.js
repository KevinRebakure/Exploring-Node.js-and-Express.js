// create the app and add imports
const getItems = require('./utils/getItems')

const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use(express.json())

const PATH = '/data'
const FILE_PATH = './data.json'

// 1. READ

app.get(PATH, (req, res) => {
    fs.readFile(FILE_PATH, { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        const response = getItems(data)
        if (response.length === 0) {
            res.send('There are no items')
        } else {
            res.status(200).send(response)
        }
    })
})

// 2. CREATE

app.post(PATH, (req, res) => {
    if (req.body.id && req.body.title) {
        fs.readFile(FILE_PATH, { encoding: 'utf-8' }, (err, data) => {
            if (err) return res.status(500).send(err.message)

            const response = JSON.parse(data)
            const ids = response.items.map((item) => item.id)
            if (ids.includes(req.body.id)) {
                res.send('That id already exist!❌')
            } else {
                fs.writeFile(
                    FILE_PATH,
                    `\n ${JSON.stringify(response)}`,
                    (err) => {
                        if (err) res.status(500).send(err.message)
                        res.send('Item added✅')
                    }
                )
            }
        })
    } else {
        res.send('You have to provide the Id and the title!')
    }
})

// 3. UPDATE

app.put(`${PATH}/:id`, (req, res) => {
    const id = req.params.id

    fs.readFile(FILE_PATH, { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        const response = JSON.parse(data)
        const ids = response.items.map((item) => item.id)
        const filteredArray = response.items.filter(
            (item) => item.id !== Number(id)
        )
        filteredArray.push({
            id: Number(id),
            title: req.body.title || 'no data',
        })
        filteredArray.sort((a, b) => a.id - b.id)
        response.items = filteredArray

        fs.writeFile(FILE_PATH, `\n ${JSON.stringify(response)}`, (err) => {
            if (err) res.status(500).send(err.message)
            if (!ids.includes(id)) {
                res.send("Item didn't exist. It was created✅")
            } else {
                res.send('Item updated✅')
            }
        })
    })
})

// 4. DELETE

app.delete(`${PATH}/:id`, (req, res) => {
    const id = req.params.id
    fs.readFile(FILE_PATH, { encoding: 'utf-8' }, (err, data) => {
        if (err) return res.status(500).send(err.message)
        const response = JSON.parse(data)
        const ids = response.items.map((item) => item.id)
        if (ids.includes(Number(id))) {
            const filteredArray = response.items.filter(
                (item) => item.id !== Number(id)
            )
            filteredArray.sort((a, b) => a.id - b.id)
            response.items = filteredArray

            fs.writeFile(FILE_PATH, `\n ${JSON.stringify(response)}`, (err) => {
                if (err) res.status(500).send(err.message)
                res.send('Request received')
            })
            res.send(`Item deleted✅`)
        } else {
            res.send("The item doesn't exist❌")
        }
    })
})

// create and start the server

const server = http.createServer(app)
const PORT = 3000

server.listen(PORT, () => {
    console.log('Server is listening...')
})
