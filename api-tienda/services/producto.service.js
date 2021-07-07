let Producto = {
	crearProducto: function (producto, cb) {
		// Verificamos la existencia de una propiedad del objeto
		// Por que req.body nos devuelve un objeto vacio en el peor de los casos 
		// Y un objeto vacio no es medible
		if(producto.codigo){
			// Llamar el servicio de base de datos
			// Usamos la funcion insertProductos
			dbService.insertProductos(db, [producto], function (data){
				// Si es mayor que 0 quiere decir que se inserto correctamente
				if(data.insertedCount > 0){
					cb({response: "Producto insertado correctamente."})
				} else {
					cb({error: "Error al insertar producto.", stack: data})
				}
			})
		} else {
			cb({error: "Error. Producto vacio"})
		}
	},
	obtenerProductos: function (cb){
		dbService.findProductos(db, {}, function (data){
			cb({response: data})
		})
	},
	obtenerProductoPorCodigo: function (codigo, cb){
		if(codigo){
			dbService.findProductos(db, {codigo: codigo}, function (data){
				cb({response: data})
			})
		} else {
			cb({error: "Error codigo vacio"})
		}
	}
}
module.exports = Producto