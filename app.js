const express = require("express")
const pokemon = require('./models/pokemon.json')
const app = express()

app.get('/', (req, res) => {
    res.send(`App Initialized`)
})


module.exports = app