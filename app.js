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
  
// EXPORT
module.exports = app