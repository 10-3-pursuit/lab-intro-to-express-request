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
## JSON from server side to client side

```js
// --- must include middleware for POST to work
 app.use(express.json()); // modifies data of incoming request - added to request object using this middleware

//before sending the data to the client the server has to be able to read it so before doiing app.get we create a fx to read the data from dev-data folder. This code will be read right after application starts up
const jsonPokemon = JSON.parse( // to turn the following into a javascript object to be used in next lines of code
     fs.readFileSync(`./models/pokemon.json`)
)
```
The line `app.use(express.json());` is crucial in a Node.js Express application when you need to handle incoming requests with JSON payloads. This middleware is needed for the following reasons:

1. **Parsing JSON Payloads**: Express does not parse the body of incoming requests by default. When your application needs to accept incoming requests with JSON-formatted data (e.g., POST or PUT requests where the data sent by the client is in JSON format), this middleware parses the JSON content in the body of the request and makes it easily accessible through `req.body`. 

2. **API Development**: If you are developing an API that accepts JSON data for creating or updating resources (like users, posts, etc.), you'll need this middleware to parse the JSON body. This is a common requirement for RESTful APIs and services that communicate with front-end applications using JSON.

3. **Form Submission Handling**: While form submissions from web pages often use URL-encoded formats, modern web applications frequently use JSON to send form data via JavaScript. In such cases, to correctly receive and parse the form data sent in JSON format, you'll need to use `express.json()` middleware.

Regarding the second part of your code snippet:

```javascript
const jsonPokemon = JSON.parse(
     fs.readFileSync(`./models/pokemon.json`)
)
```

This code is used for reading data from a file and converting it into a JavaScript object at the start of your application. Here’s why you would need this:

1. **Initializing Application Data**: If your application needs to preload data from a file (like a JSON file containing Pokémon data in your example) and use this data throughout the application, you would read the file and parse it into a JavaScript object. This is often done at startup to initialize the application state or to load configuration data.

2. **File-Based Data Storage**: In applications where a database is not used or needed, data can be stored in files (like JSON files). Reading this data into your application allows you to work with it as if it were coming from a more traditional data source.

3. **Static Data Usage**: For applications that use a set of static data that does not change frequently (like a list of Pokémon), loading this data from a JSON file at application startup is an efficient way to make it available for the application's needs.

In summary, `app.use(express.json());` is needed for applications that accept JSON payloads, enabling them to parse and use this data effectively. The `fs.readFileSync` and `JSON.parse` pattern is used to load and parse static data from files, making it available for use in your application logic.