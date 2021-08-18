const express    = require('express')
const cors 		 = require('cors')
const bodyParser = require('body-parser')
global.dbService  = require('./services/mdb.service')

// invocar el express dentro la app
const app = express()

// Defino el puerto donde va a escuchar esta API REST
const port = 3000


let middlewareToken = (req, res, next) => {
	console.log("MID ::", req.headers)

	if(req.headers.token == 'alex123'){
		next()
	} else {
		res.send({error: "Error en validacion del token"})
	}
	// res.send("Hola")
	
}

app.use(cors())
app.use(bodyParser.json())

// Para utilizar el middleware
// app.use(middlewareToken)

app.get('/', (req, res) => {

  // Solo devuelve una respuesta
  // Con texto plano
  res.send('Bienvenidos a mi API!')
})

// PRODUCTOS API
app.post('/productos/new', middlewareToken, (req, res) => {

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

app.put('/productos/:id', (req, res) => {

	const Producto = require('./services/producto.service')
	let id 	   = req.params.id
	
	Producto.editarProducto(req.body, id, function (data) {
		
		res.set('Content-Type', 'application/json')
	  	res.send(data)
	})
})


app.delete('/productos/:id', (req, res) => {

	const Producto = require('./services/producto.service')
	let id 	   = req.params.id
	
	Producto.eliminarProducto(id, function (data) {
		
		res.set('Content-Type', 'application/json')
	  	res.send(data)
	})
})

app.get('/productos/:id', (req, res) => {

	const Producto = require('./services/producto.service')
	let id 	   = req.params.id
	
	Producto.obtenerProductoPorId(id, function (data) {
		
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