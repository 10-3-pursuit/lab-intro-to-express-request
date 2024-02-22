// DEPENDENCIES
// require our app.js (this is importing app.js into our server.js)
const app = require("./app.js");

// CONFIGURATION
// we have to use our dotenv file (line 6 is how we import it)
require("dotenv").config();
const PORT = process.env.PORT || 3003;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});