// Importo el modulo de express para nuestra app.js
// Lo hago disponible globalmente dentro de la app
const express    = require('express')
const bodyParser = require('body-parser')

// invocar el express dentro la app
const app = express()

// Defino el puerto donde va a escuchar esta API REST
const port = 3000

app.use(bodyParser.json())

const Producto = require('./services/productos.service')
const Stock    = require('./services/stock.service')

app.get('/', (req, res) => {

  // Solo devuelve una respuesta
  // Con texto plano
  res.send('Bienvenidos a mi API!')
})


//
// SERVICIO STOCK
//

// ITEMS DE STOCK
app.get('/stock/all', (req, res) => {
  const stock = Stock.getAllStock()
  res.set('Content-Type', 'application/json')
  res.send(stock)
})

// ITEM POR ID
app.get('/stock/id/:valor', (req, res) => {
  let item       = {}
  let items      = Stock.getAllStock()
  const valor    = req.params.valor;
  item           = Stock.getStockById(valor, items)
  res.set('Content-Type', 'application/json')
  res.send(item)
})

// ITEM POR NOMBRE DE PRODUCTO
app.get('/stock/nombreProducto/:valor', (req, res) => {
  let item       = {}
  let items      = Stock.getAllStock()
  const valor    = req.params.valor;
  item           = Stock.getStockByNombreProducto(valor, items)
  res.set('Content-Type', 'application/json')
  res.send(item)
})

// ITEM POR NOMBRE DE CLIENTE
app.get('/stock/nombreCliente/:valor', (req, res) => {
  let item       = {}
  let items      = Stock.getAllStock()
  const valor    = req.params.valor;
  item           = Stock.getStockByNombreCliente(valor, items)
  res.set('Content-Type', 'application/json')
  res.send(item)
})

// TOTAL DE CANTIDAD
app.post('/stock/totalCantidad', (req, res) => {
  let items      = Stock.getAllStock()
  let total      = {}
  total          = Stock.consultarTotalCantidad(items)
  res.set('Content-Type', 'application/json')
  res.send(total)  
})

//TOTAL POR CLIENTE
app.post('/stock/totalCliente', (req, res) => {
  let items      = Stock.getAllStock()
  let resultado  = {}
  resultado      = Stock.consultarTotalPorCliente(items)
  res.set('Content-Type', 'application/json')
  res.send(resultado)  
})



//
// SERVICIO OBTENER PRODUCTOS
// 
app.get('/productos/all', (req, res) => {
  const productos = Producto.getAllProductos()

  res.set('Content-Type', 'application/json')
  res.send(productos)
})

// Obtener producto por codigo
app.get('/productos/:code', (req, res) => {

  let producto   = {}
  let productos  = Producto.getAllProductos()

  const code     = req.params.code;
  producto       = Producto.getProductoByCode(code, productos)

  res.set('Content-Type', 'application/json')
  res.send(producto)
})


// Consultar stock
app.post('/productos/stock/consulta', (req, res) => {

  let producto   = {}
  let productos  = Producto.getAllProductos()
  producto       = Producto.consultarStock(req.body, productos)

  res.set('Content-Type', 'application/json')
  res.send(producto)
})

app.put('/productos/stock/ingreso', (req, res) => {

  let producto   = {}
  let productos  = Producto.getAllProductos()
  producto       = Producto.ingresoStock(req.body, productos)

  res.set('Content-Type', 'application/json')
  res.send(producto)
})

// Obtener producto por codigo
app.delete('/productos/stock/egreso/:code/:cantidad', (req, res) => {

  let producto   = {}
  let productos  = Producto.getAllProductos()

  const code     = req.params.code;
  const cantidad = req.params.cantidad;

  producto       = Producto.egresoStock(code, cantidad, productos)

  res.set('Content-Type', 'application/json')
  res.send(producto)
})


app.listen(port, () => {
  console.log(`New app listening at http://localhost:${port}`)
})