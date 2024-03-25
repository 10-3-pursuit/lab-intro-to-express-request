// Dependecies
const express = require("express");


//Confifuration
const app = express();




const pokemonArray = require('./models/pokemon.json')
console.log(pokemonArray[0])


//routes
app.get("/pokemon", (req,res) => {
    res.json({pokemon:pokemonArray});
});

app.get("/pokemon/search", (req, res) =>{
    const {name} = req.query;
    const pokemon = pokemonArray.find(element =>{
      return element.name = name
    });
    

    if(!pokemon){
        return res.status(404).json({ error: 'Pokemon not found' });
    }
    res.json(pokemon);
 });

app.get("/pokemon/:index", (req,res) => {
  const { index } = req.params
  if (pokemonArray[index]){
    res.json({pokemon: pokemonArray[index]});
  } else {
    res.json({ message: `sorry, no pokemon found at /pokemon[${index}]`})
  }
});

 


//export
module.exports = app;