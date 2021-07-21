const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())
const stock = require('./services/stock.service.js')

app.get ('/', (req, res) => {
    res.send('Bienvenidos a mi API!')
})


//Stock ->
app.get('/stock/all', (req, res) => {
    let stock    = require('.stock/services');
    let response = stock.obtenerStock();

    res.set('Content-Type', 'application/json')
    res.send(stock);
});


//ItemsId ->
app.get('/stock/:id', function (req, res) {
    let Stock   = require('./stock.services');
    let id      = req.params.id;
    let stocks  = Stock.getAllStocks();

    let response = stock.obtenerItemPorId(stock, id);
    res.set('Content-Type', 'application/json')
    res.send(response)
});

//ItemsNombre ->
app.post('/stock/nombre', function (req, res) {
    let Stock    = require('./stock.services');
    let post     = req.body;
    let stocks   = stock.obtenerStock();
    let nombres  = Stock.obtenerItemPorNombre(productos, post)
    let response = nombres

    res.set('Content-Type', 'application/json')
    res.send(response);
});





app.listen(port, () => {
    console.log(`New app listening at http://localhost:${port}`)
})