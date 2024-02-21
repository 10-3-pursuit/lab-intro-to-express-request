const express = require('express')
const app = express()

const pokemon = require('./models/pokemon.json')

app.get('/pokemon', (req, res) => {
    res.json({pokemon})
})
app.get('/pokemon/search', (req, res) => {
    const {name} = req.query
    res.json({pokemon: pokemon.find(p => p.name.toLowerCase() === name.toLowerCase() || p.name.toUpperCase() === name.toUpperCase())})
})
app.get('/pokemon/:index', (req, res) => {
    const {index} = req.params
    if(pokemon[index]) {
        res.json({pokemon : pokemon[index]})
    } else {
        res.json({message : `sorry, no pokemon found at  /pokemon[${index}]`})
    }
})

module.exports = app