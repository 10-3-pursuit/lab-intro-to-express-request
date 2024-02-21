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

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray} = req.params
    
    if (pokemon[indexOfArray]) {
        res.json({pokemon: pokeons[indexOfArray]});
    } else {
        res.json({ message: `Sorry, no Pokémon found at /pokemon/${indexOfArray}`})
    }
});

app.get('/pokemon/search', (res, req) => {
    const { name } = req.query;
    const findPokemon = pokemons.find(pokemon => pokemon.name.toLowerCase());
        
    if (!findPokemon) {
            return res.json({ message: `No Pokémon found with name '${name}'` });
        } else {
            res.json({ pokemon: findPokemon });
        }
});
// EXPORT
module.exports = app