const express    = require('express')
const bodyParser = require('body-parser')
global.dbService  = require('./services/db.service')

// invocar el express dentro la app
const app = express()

// Defino el puerto donde va a escuchar esta API REST
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {

  // Solo devuelve una respuesta
  // Con texto plano
  res.send('Bienvenidos a mi API!')
})

// PRODUCTOS API
app.post('/productos/new', (req, res) => {

	const Producto = require('./services/producto.service')
	
	// Me llega el body del POSTMAN (Frontend)
	// Se conecta con un servicio de base de datos 
	// Y esto puede tardar un tiempo X 
	Producto.crearProducto(req.body, function (data) {
		// Cuando resuelve
		// Recien libera la respuesta
		// response o error
		// data.response o data.error
		
		res.set('Content-Type', 'application/json')
	  	res.send(data)
	})
})

app.get('/productos', (req, res) => {

	const Producto = require('./services/producto.service')

	Producto.obtenerProductos( function (data){
		res.set('Content-Type', 'application/json')
	  	res.send(data)
	})
})

app.get('/productos/buscar/:codigo', (req, res) => {

	let codigo 	   = req.params.codigo
	const Producto = require('./services/producto.service')

	Producto.obtenerProductoPorCodigo( codigo, function (data){
		res.set('Content-Type', 'application/json')
	  	res.send(data)
	})
})

app.listen(port, () => {
  console.log(`New app listening at http://localhost:${port}`)
})