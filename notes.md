# Search Queries on Server

// Route to search the name only
app.get('/pokemon/search',(req, res)=>{
    // add functionality for queries
    // extract name 
    // use req.params
    // use req.query for URL conversion stuff
    const { name } = req.query; // will display on http://localhost:8888/pokemon/search?name=mewtwo
    console.log(name)
    // res.json()
})

http://localhost:8888/pokemon/search?name=mewtwo