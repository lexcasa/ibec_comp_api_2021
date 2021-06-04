const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pepe', (req, res) => {
  res.send('Hola Pepe!')
})

app.get('/gato', (req, res) => {
  res.send('Hola cat!')
})

app.get('/perro', (req, res) => {
  res.send('Hola dog!')
})

app.listen(port, () => {
  console.log(`New app listening at http://localhost:${port}`)
})