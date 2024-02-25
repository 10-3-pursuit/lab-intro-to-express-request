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
    if (pokemon[indexOfArray]) {
        response.json({pokemon: pokemon[indexOfArray]})
    } else {
        response.json({
            message: `sorry, no pokemon found at ${indexOfArray}`
            // http://localhost:8888/pokemon/500 which gave the exact text message in URL
        })

    }
   
});

module.exports = app;