const express = require("express");
const cors = require("cors"); // to set up frontend later
const pokemon = require('./models/pokemon.json')
const app = express(); // config express
//const fs = require('fs');

app.use(cors()); // middleware to allow stuff from front end

// --- must include middleware for POST to work
// app.use(express.json()); // modifies data of incoming request - added to request object using this middleware

//before sending the data to the client the server has to be able to read it so before doiing app.get we create a fx to read the data from dev-data folder. This code will be read right after application starts up
// const jsonPokemon = JSON.parse( // to turn the following into a javascript object to be used in next lines of code
//     fs.readFileSync(`./models/pokemon.json`)
// )
//console.log(pokemon[0])

// Route for all pokemon
app.get('/pokemon', (req, res) => {
    res.json(pokemon)
})

//static routes go above dynamic routes
// Route to search the name only
app.get('/pokemon/search',(req, res)=>{
    // add functionality for queries
    // extract name 
    // use req.params
    // use req.query for URL conversion stuff
    const { name } = req.query; // will display on http://localhost:8888/pokemon/search?name=mewtwo
    // console.log(name)
    res.json()
})
// Route for single pokemon
app.get('/pokemon/:indexOfArr',(req, res) => { // variables NEEDDDD to match!!!
    //iterate to get single pokemon then put inside res.json
    // use req.params
    // or make key for index
    const { indexOfArr } = req.params
    if (pokemon[indexOfArr]) {
        res.json({ pokemon: pokemon[indexOfArr] })
    } else {
        res.json({
            message: `No pokemon found at ${indexOfArr}`
        })
    }
})



module.exports = app;