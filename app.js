const express = require('express')
const pokemon = require('./models/pokemon.json')

// console.log(pokemon[0])

const app = express()

  app.get('/pokemon', (req, res) => {
    res.json({ pokemon })
  })

  app.get('/pokemon/search', (req, res) => {
    const { name } = req.query
    const searchResult = pokemon.filter((element) => element.name.toLowerCase() === name)
    res.json({searchResult})
  })

  app.get('/pokemon/:indexOfArray', (req, res) => {
    const {indexOfArray} = req.params
    if(pokemon[indexOfArray]){
        res.json({pokemon: pokemon[indexOfArray]})
    } else {
        res.json({message: `sorry, no pokemon found at ${indexOfArray}`})
    }
  })


  module.exports = app