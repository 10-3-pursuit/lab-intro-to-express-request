// DEPENDENCIES
const express = require('express')
const pokemon = require('./models/pokemon.json')

// CONFIGURATION
const app = express()
console.log(pokemon[0].name)

// ROUTES
app.get('/', (req, res) => {
  res.json({Welcome:pokemon[0]} )
})

// Index route
app.get('/pokemon', (req, res) => {
  res.json({ pokemon })
})

app.get('/pokemon/search', (req, res) => {
    const {name} = req.query
    console.log(name);
    const pokemonList = pokemon.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    if(pokemonList.length>0){
      res.json({pokemon: pokemonList})
    }else {
      res.send({message: "Pokemon not found" });
    }
})

// ROUTES Show one pokemon, with error handling
//dynamic route
app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params
  if (pokemon[index]) {
    res.json({ pokemon: pokemon[index] })
  } else {
    res.json({ message: `sorry, no pokemon found at index: ${index}` })
  }
});



// EXPORT
module.exports = app