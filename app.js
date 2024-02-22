const pokemon = require("./models/pokemon.json")
const express = require("express")

const app = express()

app.get("/pokemon",(req,res)=>{
    res.json({pokemon})
})
app.get("/pokemon/search",(req,res)=>{
    const {name} = req.query
    const foundPokemon = pokemon.find(pokemon=> pokemon.name.toLowerCase() === name.toLowerCase())
    if(foundPokemon){
        res.json(foundPokemon)
    }else{
        res.json({message:`Could not find pokemon with a name of ${name}`})
    }
})

app.get("/pokemon/:indexOfArray",(req,res)=>{
    const {indexOfArray} = req.params
    const pokemonSelected = pokemon[indexOfArray]
    if(pokemonSelected && Number(indexOfArray)){
        res.json({pokemon:pokemonSelected})
    }else{
        res.json({message:`Sorry, no pokemon found at /pokemon/${indexOfArray}`})
    }
})

module.exports = app