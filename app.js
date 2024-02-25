const express = require('express');
const pokemon = require('./models/pokemon.json')
const app = express();

app.get('/',(request, response) => {
    response.send('Pokemon eh my ting nuh')
});

app.get('/pokemon', (request, response) => {
    response.json({pokemon: pokemon});
});
app.get('/pokemon/:indexOfArray', (request, response) => {
    const {indexOfArray} = request.params
    response.json({pokemon: pokemon[indexOfArray]})
})

module.exports = app;