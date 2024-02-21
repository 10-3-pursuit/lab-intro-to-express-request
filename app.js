const express = require("express")
const cors = require('cors')
const pokemon = require('./models/pokemon.json')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send(`App Initialized`)
})

app.get('/pokemon', (req, res) => {
   res.json({pokemon: pokemon})
})

app.get('/pokemon/search', (req, res) => {
    const {name} = req.query

    const foundPokemon = pokemon.find(poke => poke.name.toLowerCase() === name.toLowerCase())

    if (foundPokemon) {
      res.json(foundPokemon)
    } else {
        res.status(404).send({message: 'Pokemon does not exist'})
    }
})

app.get('/pokemon/:index', (req, res) => {
    const {index} = req.params
    if (pokemon[index]) {
        res.json({pokemon:pokemon[index]})
    } else {
        res.json({message: `Sorry we do not have any pokemon at slot: ${index}`})
    }
})





module.exports = app