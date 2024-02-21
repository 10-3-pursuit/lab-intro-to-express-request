// DEPENDENCIES
const express = require('express')
const cors = require("cors")
const pokemons = require('./models/pokemon.json')

console.log(pokemons[0])
// CONFIGURATION
const app = express()

//MIDDLEWARE
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to my Pokemon World')
})
app.get('/pokemon', (req, res) => {
    res.send(pokemons)
})
app.get('/pokemon/search', (req, res) => {
  const { name } = req.query; 
  const foundPokemon = pokemons.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
  if (!foundPokemon) {
      return res.json({ message: `No Pokémon found with name '${name}'` });
}
  res.json({ pokemon: foundPokemon });
});

app.get('/pokemon/:indexOfArray', (req, res) => {
const {indexOfArray} = req.params 
if (pokemons[indexOfArray]) {
    res.json({ pokemon: pokemons[indexOfArray] });
} else {
    res.json({ message: `Sorry, no Pokémon found at /pokemon/${indexOfArray}` });
}
});
  
// EXPORT
module.exports = app