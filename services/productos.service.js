const Producto = {
	getAllProductos: function () {
		return [
			{
				"cod":"ABC123",
				"nombre": "Manzana",
				"categoria": {
					"cod":"CAT123",
					"nombre":"Frutas"
				},
				"precio":100,
				"stock": {
					"existe": true, 
					"cantidad": 105
				}
			},
			{
				"cod":"BBC123",
				"nombre": "Banana",
				"categoria": {
					"cod":"CAT123",
					"nombre":"Frutas"
				},
				"precio":89,
				"stock": {
					"existe": true, 
					"cantidad": 105
				}
			}
		]
	},
	getProductoByCode: function (code, arr){
		let find = {}
		arr.map( function (item){
			if(item.cod === code){
				find = item
			}
		})

		return find
	},
	consultarStock: function (producto, arr){
		let find = {}
		arr.map( function (item){
			if(item.cod === producto.cod && item.stock.cantidad >= producto.cantidad){
				find = {
					stockDisponible: true
				}
			}
		})
		return find
	},
	ingresoStock: function (producto, arr){
		let find = {}

		arr.map( function (item){
			if(item.cod === producto.cod){
				let cantAnterior = item.stock.cantidad
				cantNueva = cantAnterior + producto.cantidad

				find = {
					cod: producto.cod,
					stock: {
						cantidad: cantNueva
					}
				}
			}
		})
		return find
	},
	egresoStock: function (code, cantidad, arr){
		let find = {}
		arr.map( function (item){
			if(item.cod === code){
				let cantAnterior = item.stock.cantidad
				cantNueva = cantAnterior - cantidad

				find = {
					cod: code,
					stock: {
						cantidad: cantNueva
					}
				}
			}
		})

		return find
	}
}

module.exports = Producto