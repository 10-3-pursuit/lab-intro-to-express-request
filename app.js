const express = require("express");
const cors = require("cors"); // to set up frontend later
const pokemon = require('./models/pokemon.json')
const app = express(); // config express
// const fs = require('fs');

app.use(cors()); // middleware to allow stuff from front end

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Pokemon Express app'})
})
// Route for all pokemon
app.get('/pokemon', (req, res) => {
    res.json(pokemon)
})

//static routes go above dynamic routes
// Route to search the name only
app.get('/pokemon/search',(req, res)=>{
    // use req.query for URL conversion stuff
    const { name } = req.query; // will display on http://localhost:8888/pokemon/search?name=mewtwo
    // console.log(name)
    const selectedPoke = 
    pokemon.find((singlePoke) => name.toLowerCase() === singlePoke.name.toLowerCase());
    
    selectedPoke ? res.json({ selectedPoke }) : res.json({ message: `Pokemon not Found` })
})
// Route for single pokemon
app.get('/pokemon/:indexOfArr',(req, res) => { // variables NEEDDDD to match!!!
    // use req.params
    // make key for index
    const { indexOfArr } = req.params
    if (pokemon[indexOfArr]) {
        res.json({ pokemon: pokemon[indexOfArr] })
    } else {
        res.json({
            message: `No pokemon found at ${indexOfArr}`
        })
    }
})



module.exports = app;