// DEPENDENCIES --> imports
const express = require("express");
const cors = require("cors");

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);
const app = express();

// MIDDLEWARE
app.use(cors());

// All pokemon route --> Static Route
app.get("/pokemon", (req, res) => {
  res.json({ pokemon });
});

// Search pokemon (Query) --> Static Route
// remember to call query in browser to use ?=query where query is the name of the query being used
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  console.log(name);
  const pokeFinder = pokemon.find(
    (poke) => name.toLowerCase() === poke.name.toLowerCase()
  );
  pokeFinder
    ? res.json({ pokeFinder })
    : res.json({ message: `sorry, pokemon not found` });
});

// Dynamaic Route
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.json({ pokemon: pokemon[indexOfArray] });
  } else {
    res.json({
      message: `sorry, no pokemon found at : ${indexOfArray}`,
    });
  }
});

module.exports = app;
