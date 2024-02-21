// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
require('dotenv').config()

// console.log(process.env);
const PORT = process.env.PORT || 3003;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})