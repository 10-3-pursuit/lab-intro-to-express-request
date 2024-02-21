const express = require('express')
const pokemon = require('./models/pokemon.json')
console.log(pokemon[0])

const app = express()

app.get('/pokemon', (req, res) => {
    res.json({ pokemon })
})

app.get('/pokemon/search', (req, res) => {
    const pokemonName = req.query.name
    const foundPokemon = pokemon.find(poke => pokemonName === poke.name.toLowerCase()
    )
    if (foundPokemon){
        res.json({foundPokemon})
    } else {
        res.json({message: `sorry, no pokemon found with the name ${pokemonName}`})
    }
})
app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params
    if (pokemon[indexOfArray]){
        res.json({ pokemon: pokemon[indexOfArray] })
    } else {
        res.json({message: `sorry, no pokemon found at /pokemon: ${indexOfArray}`})
    }
})


module.exports = app