// Installing dependecies
const pokemon = require("./models/pokemon.json");
const express = require("express");

// declaring app to hold express
const app = express();

// Routes:
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App");
});

app.get("/pokemon", (req, res) => {
  res.json({ pokemon });
});

// NOTE!!! The order of the route matters!!! Before i had index of array here and it was inputting the pokemon name there instead of the search path
app.get("/pokemon/search", (req, res) => {
  // make a route /pokemon/search - where a user can add a query parameter such as http://localhost:8888/pokemon/search?name=oddish
  const { name } = req.query;
  const searchedPokemon = pokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );
  //   This will run in the terminal
  console.log(searchedPokemon);
  if (Object.keys(searchedPokemon).length > 0) {
    res.json({ pokemon: searchedPokemon });
  } else {
    res.json({ message: "Could not find this pokemon" });
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray.length > 0) {
    res.json({ pokemon: pokemon[indexOfArray] });
  } else {
    res.send(`Sorry, no pokemon found at /pokemon[${indexOfArray}]`);
  }
});

module.exports = app;
