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
    
})

module.exports = app;