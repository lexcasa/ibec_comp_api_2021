const stockProductos = {
        getAllStock: function () {
        return [ 
            {
        id: 10,
            producto: {
                nombre: "Manzana",
                categoria: {
                    nombre: "Frutas"
                }

            },
            cliente: {
                nombre: "Alex",
                esEmpresa: false
            },
            cantidad: 10,
            precio: 100
            }
        ]}
},

getStockById: function (id, arr){
    let find = {}
    arr.map( function (item){
        if (item.id === code){
            find = item
        }
    })
    return find
},
consultarStock: function(stock, arr){
    console.log(stock)
}