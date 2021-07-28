const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())
const stock = require('./services/stock.service.js')


app.get ('/', (req, res) => {
    res.send('Bienvenidos a mi API!')
})


//ItemsStock ->
app.get('/stock/all', (req, res) => {
    let stock    = require('.stock/services');
    let response = stock.obtenerStock();

    res.set('Content-Type', 'application/json')
    res.send(response);
});


//ItemsId ->
app.get('/stock/:id', function (req, res) {
    let Stock   = require('./stock.services');
    let id      = req.params.id;

    let response = stock.obtenerItemPorId(stock, id);
    res.set('Content-Type', 'application/json')
    res.send(id)
});

//ItemsNombre ->
app.get('/stock/nombrestock', function (req, res) {
    let item     = require('./stock.services');
    let item     = {};
    let item     = stock.obtenerItem();
    let nombres  = Stock.obtenerItemPorNombre(item)
    let response = nombres

    res.set('Content-Type', 'application/json')
    res.send(nombre);
});

// NombreCliente ->
app.get('/stock/:client', function (req, res) {
    let stock     = require('./stock.services');
    let stock      = req.params.client;
    let nombre   = stock.obtenerCliente();
    let nombre    = Stock.obtenerNombreCliente(nombreCliente)
    let response  = nombre
    
    res.set('Content-Type', 'application/json')
    res.send(cliente);
})






app.listen(port, () => {
    console.log(`New app listening at http://localhost:${port}`)
})