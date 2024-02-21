const express = require('express')
const pokemon = require('./models/pokemon.json')

const app = express()

app.get('/pokemon', (rep, res) => {
    res.json({ pokemon })
})

app.get('/pokemon/search', (req, res) => {
    const { name } = req.query
    const lowerCaseSinglePokemon = name.toLowerCase()

    const foundPokemon = pokemon.find(monster => monster.name.toLowerCase() === lowerCaseSinglePokemon)

    if (foundPokemon) {
        res.json({ pokemon: foundPokemon })
    } else {
        res.json({ message: `Cannot find any pokemon with this name: ${name}` })
    }
})

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params
    if (pokemon[indexOfArray]) {
      res.json({ pokemon: pokemon[indexOfArray] })
    } else {
      res.json({ message: `Cannot find any pokemon at this index: ${indexOfArray}` })
    }
})

    

module.exports = app