// requires package used in the project
const express = require('express')
const app = express()
port = 3000

// routes setting
app.get('/', (req, res) => {
  res.send('initialize app.js')
})

// start and listen on th Express server
app.listen(port, () => {
  console.log(`the server is listening on localhost:${port}`)
})