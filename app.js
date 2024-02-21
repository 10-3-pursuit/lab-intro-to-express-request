const express = require('express')
const cors = require("cors")
const pokemon = require('./models/pokemon.json')

// console.log(pokemon[0])

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(cors());

// ROUTES

  app.get('/pokemon', (req, res) => {
    res.json({ pokemon })
  })

  app.get('/pokemon/search', (req, res) => {
    const { name } = req.query
    const searchResult = pokemon.filter((element) => element.name.toLowerCase() === name)
    if(searchResult){
        res.json({pokemon: searchResult})
    } else {
        res.json({message: `sorry, no pokemon found with the name of "${name}"`})
    }
  })

  app.get('/pokemon/:indexOfArray', (req, res) => {
    const {indexOfArray} = req.params
    if(pokemon[indexOfArray]){
        res.json({pokemon: pokemon[indexOfArray]})
    } else {
        res.json({message: `sorry, no pokemon found at position ${indexOfArray}`})
    }
  })


  module.exports = app