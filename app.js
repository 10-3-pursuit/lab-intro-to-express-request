//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message:"Welcome to my Express app"});
});

app.get('/pokemon', (req, res) =>{
    res.json(pokemon)
});

app.get('/pokemon/search', (req, res) => {
    const { name } = req.query;
// console.log(name)
const selectedPoke = pokemon.find(singlePoke) => name.toLowerCase() === singlePoke.name.toLowercase()

selectedPoke ? res.json({ selectedPoke }) : res.json({message: `Pokemon not found`})
});

//single Pokemon route
app.get('/pokemon/:indexOfArr', (req, res) =>{
    const { indexOfArr } = req.params
    if (pokemon[indexOfArr]){
        res.json({pokemon: pokemon[indexOfArr]
        })
    } else {
        res.json({ message: `No pokemon found at ${indexOfArr}`
    })
    }
})

module.exports = app;