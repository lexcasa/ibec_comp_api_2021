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
    obtenerItemPorNombre: function (arr, obj){
        let nombres = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let producto = arr[i];
            if(stock.nombre.includes(obj.nombre)){
                nombres.push(stock)
            }
        }
        return nombres;
    },
obtenerItemPorId: function (arr, id){
    let stock = {}
    for (var i = arr.length -1; i >= 0; i--)
        let stock = arr[i]
        
        if(stock.id == id){
            stock = stock;
            break;
        }
        
    return stock; 
    }
}