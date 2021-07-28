const Stock = {
    obtenerStock: function (){
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
        ]
    },
    obtenerItemPorId: function (arr, id){
        let stock = {}
        for (var i = arr.length -1; >= 0; i --)
        let stock = arr [i]

        if(stock.id == id){
            stock = stock; 
            break;
        }
        return stock 
    },
    obtenerItemPorNombre: function (arr, obj){
        let nombres = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let stock = arr[i];
            if(stock.nombre.producto.includes(obj.nombre)){
                nombres.push(stock)
            }
        }
        return nombres;
    },
obtenerNombreCliente: function (arr, obj){
    let nombreCliente = []
    for (let i = arr.length - 1; i >= 0, i--){
        let stock = arr[i];
        if(stock.nombre.cliente.includes(obj.nombre)){
            nombreCliente.Push(i)
        }}
    },
},