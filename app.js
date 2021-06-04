// Importo el modulo de express para nuestra app.js
// Lo hago disponible globalmente dentro de la app
const express = require('express')

// invocar el express dentro la app
const app = express()

// Defino el puerto donde va a escuchar esta API REST
const port = 3000

// Defino el estado
// Metodo, Ruta, Input/Output
/*
	- Metodo: .get 
	- Ruta: /
	- Input: req
	- Outpu: res 

	Estado : Raiz (o root)

*/
app.get('/', (req, res) => {

  // Solo devuelve una respuesta
  // Con texto plano
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