const Stock = {
	getAllStock: function () {
		return[
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
			},
			{
				id: 20,
				producto: {
					nombre: "Naranja",
					categoria: {
						nombre: "Frutas"
					}
				},
				cliente: {
					nombre: "Alex",
					esEmpresa: false
				},
				cantidad: 15,
				precio: 50
			},
			{
				id: 30,
				producto: {
					nombre: "Pera",
					categoria: {
						nombre: "Frutas"
					}
				},
				cliente: {
					nombre: "Rafael",
					esEmpresa: false
				},
				cantidad: 20,
				precio: 70
			},
			{
				id: 40,
				producto: {
					nombre: "Naranja",
					categoria: {
						nombre: "Frutas"
					}
				},
				cliente: {
					nombre: "Laura",
					esEmpresa: false
				},
				cantidad: 15,
				precio: 50
			}						
		]
	},
	getStockById: function (id, arr){
		let find = {}
		arr.map( function (item){
			if(item.id == id){
				find = item
			}
		})
		return find
	},
	getStockByNombreProducto: function (buscaVal, arr){
		let find = []
		arr.map( function (item){
			if(item.producto.nombre == buscaVal){
				find.push(item)
			}
		})
		return find
	},
	getStockByNombreCliente: function (buscaVal, arr){
		let find = []
		arr.map( function (item){
			if(item.cliente.nombre == buscaVal){
				find.push(item)
			}
		})
		return find
	},		
	consultarTotalCantidad: function (arr){
		let suma = 0		
		arr.map( function (item){
			suma +=item.cantidad
		})
		let resultado = {totalCantidad: suma}
		return resultado
	},	
	consultarTotalPorCliente: function (arr){
		let clientes     = []
		let totalCliente = []
		arr.map( function (item){
			let nombre  = item.cliente.nombre;
			const found = clientes.find(element=>"Alex")
			if (found!=nombre) {				
				clientes.push(nombre)
			}
		})
		clientes.map( function (item2){
			let suma = 0
			const cliente = item2
			arr.map( function (item){
				if(item.cliente.nombre === cliente){
					suma += item.cantidad
				}
			})
			let elemento = {cliente:item2,total:suma}
			totalCliente.push(elemento)
		})
		return totalCliente
	}

}
module.exports = Stock