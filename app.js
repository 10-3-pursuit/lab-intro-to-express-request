const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.json({ pokemon });
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const searchResults = pokemon.filter(
    (mon) => mon.name.toLowerCase() === name
  );
  res.json({ searchResults });
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
