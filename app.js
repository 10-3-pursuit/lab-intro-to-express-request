const pokemon = require("./models/pokemon.json");
const express = require("express");
const app = express();

// ROUTES
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
//pokemon by name

app.get("/pokemon/search", (req, res) => {
  const searchQuery = req.query.name;
  if (!searchQuery) {
    return res.status(400).json({ error: "you should probably put a name" });
  }
  const foundPokemon = pokemon.find(
    (poke) => poke.name.toLowerCase() === searchQuery.toLowerCase()
  );

  if (foundPokemon === undefined) {
    return res
      .status(404)
      .json({ error: "Pokemon not found. Spelling error maybe?" });
  }

  res.json(foundPokemon);
});

// LISTEN
let PORT = 8888;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Show one pokemon, with error handling
app.get("/pokemon/:index", (req, res) => {
  //req.params is equal to user input i think. req meaning request so req.params means request parameters
  //we destructure index so that it always equals user input
  const { index } = req.params;
  if (pokemon[index]) {
    //respond with the pokemon at the given index
    res.json({ pokemon: pokemon[index] });
  } else {
    //error message
    res.json({ message: `Cannot find any pokemon at this index: ${index}` });
  }
});
