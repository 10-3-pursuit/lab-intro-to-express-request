const app = require('./app.js')

//CONFIGURATION
//The line below is how you import .env
require('dotenv').config()

const PORT = process.env.PORT

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })