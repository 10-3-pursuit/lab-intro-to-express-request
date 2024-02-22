# Connecting Backend to Frontend Notes

This is the repo to the frontend: https://github.com/JuliGarc91/lab-intro-to-express-request-frontend

## Search Queries on Server

This is how to create a get function for a search bar in client side

```js
//static routes go above dynamic routes - Search is static although you can add variables to it

// Route to search by the name only
app.get('/pokemon/search',(req, res)=>{
    // use req.query for URL conversion stuff
    const { name } = req.query; // will display on http://localhost:8888/pokemon/search?name=mewtwo
    // console.log(name)
    const selectedPoke = 
    pokemon.find((singlePoke) => name.toLowerCase() === singlePoke.name.toLowerCase());
    
    selectedPoke ? res.json({ selectedPoke }) : res.json({ message: `Pokemon not Found` })
})
```
## Search Queries on Client

This is the fetchcall for the frontend:

```js
useEffect(() => {
    if (searching) { // if theres an input means there's data being inputted by user for searching (means searching is truthy)
      fetch(`http://localhost:8888/pokemon/search?name=${searchedPoke}`) // static endpoint looks like this because used req.query in server
        .then(res => res.json())
        .then(data => {
          if (data.selectedPoke) { // if selectedPoke aka searchedPoke exists in data then execute next line
            setResults([data.selectedPoke]);
          } else { // otherwise execute next line
            setResults([]);
          }
          setSearching(false); // Reset searching state after fetch
        })
        .catch(err => {
          console.error("Failed to fetch data:", err);
          setSearch(false); // Ensure to reset searching state in case of error
        });
    }
  }, [searchedPoke, searching]); // Effect runs when searchedPoke in browser or searching input in search bar changes
  ```