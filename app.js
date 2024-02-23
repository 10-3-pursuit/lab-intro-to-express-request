const express = require('express')
const cors = require('cors')
const pokemon = require('./models/pokemon.json')

const app = express()

app.use(cors());

app.get('/pokemon', (req, res) => {
    res.json({ pokemon: pokemon })
})

app.get('/pokemon/:search', (req, res) => {
    const searchResults = [];
    const searchKeys = Object.keys(req.query)
    searchKeys.map((key) => {
        console.log('query: ', req.query[key])
        const find = pokemon.find((individualPokemon) => individualPokemon[key].toLowerCase() === req.query[key])
        console.log(find)
        searchResults.push(find);
    })
    res.json(searchResults)
})

app.get('/pokemon/:index', (req, res) => {
    const { index } = req.params
    if (pokemon[index]) {
        res.json({ pokemon: pokemon[index] })
    } else {
        res.json({ message: `sorry, no pokemon found at /pokemon/${index}` })
    }
})


module.exports = app