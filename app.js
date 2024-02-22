const express = require("express");
const cors = require("cors");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

app.use(cors());
// INDEX PAGE- ALL POKEMONS
app.get("/pokemon", (req, res) => {
  res.json(pokemon);
});

//QUERY=> search for pokemon by name
// must be up top because it is dynamic
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const foundPoke = pokemon.find(
    (poke) => poke.name.toLowerCase() === name.toLowerCase()
  );
  if (foundPoke) {
    // this is similar to a return in vanilla js
    res.json({ foundPoke });
  } else {
    // this is similar to a return in vanilla js
    res.json({ message: `${name} was not found` });
  }
});

// Route for 1 pokemon
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) {
    res.json({ pokemon: pokemon[indexOfArray] });
  } else {
    res.json({
      message: `sorry, no pokemon found at ${indexOfArray}`,
    });
  }
});

module.exports = app;
