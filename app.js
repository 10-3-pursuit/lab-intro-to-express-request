const express = require("express");
const pokemon = require("./models/pokemon.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/pokemon", (req, res) => {
  res.json({ pokemon });
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const searchResults = pokemon.find((mon) => mon.name.toLowerCase() === name);
  if (searchResults) {
    res.json({ searchResults });
  } else {
    res.json({ message: `Sorry, no pokemon found by the name of ${name}` });
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.json({ pokemon: pokemon[indexOfArray] });
  } else {
    res.json({
      message: `Sorry, no pokemon found at /pokemon/${indexOfArray}`,
    });
  }
});

module.exports = app;
