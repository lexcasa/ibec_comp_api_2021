let model = 'productos'
let Producto = {
	crearProducto: function (producto, cb) {
		// Verificamos la existencia de una propiedad del objeto
		// Por que req.body nos devuelve un objeto vacio en el peor de los casos 
		// Y un objeto vacio no es medible
		if(producto.codigo){
			// Llamar el servicio de base de datos
			// Usamos la funcion insertProductos
			dbService.insertDocument(db, model, producto, function (data){
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
	editarProducto: function (producto, id, cb) {
		// Verificamos la existencia de una propiedad del objeto
		// Por que req.body nos devuelve un objeto vacio en el peor de los casos 
		// Y un objeto vacio no es medible
		if(producto.codigo){
			// Llamar el servicio de base de datos
			// Usamos la funcion insertProductos
			dbService.updateDocument(db, model, id, producto, function (data){
				// Si es mayor que 0 quiere decir que se inserto correctamente
				if(data.modifiedCount > 0){
					cb({response: "Producto editado correctamente."})
				} else {
					cb({error: "Error al editar producto.", stack: data})
				}
			})
		} else {
			cb({error: "Error. Producto vacio"})
		}
	},
	obtenerProductos: function (cb){
		dbService.findDocuments(db, model, {}, function (data){
			if(data && data.length > 0){
				cb({response: data})
			} else {
				cb({error: "No se encontraron productos."})
			}
			
		})
	},
	obtenerProductoPorCodigo: function (codigo, cb){

		if(codigo && codigo.trim().length > 0){
			dbService.findDocuments(db, model, {codigo: codigo}, function (data){
				if(data && data.length > 0){
					cb({response: data[0]})
				} else {
					cb({error: "No se encontro producto para el codigo: " + codigo})
				}
			})
		} else {
			cb({error: "Error codigo vacio"})
		}
	},
	obtenerProductoPorId: function (id, cb){
		// Llamo la funcion de ObjectID de mongodb
		// Y verifico si con esto ya me basta
		const ObjectId    = require('mongodb').ObjectID;

		if(id && id.trim().length > 0){
			dbService.findDocuments(db, model, {_id: ObjectId(id) }, function (data){
				if(data && data.length > 0){
					cb({response: data[0]})
				} else {
					cb({error: "No se encontro producto."})
				}
			})
		} else {
			cb({error: "Error codigo vacio"})
		}
	},
	eliminarProducto: function (id, cb){
		dbService.removeDocument(db, model, id, function (data){
			console.log("data: ", data)
			if(data && data.deletedCount > 0){
				cb({response: "Producto eliminado correctamente."})
			} else {
				cb({error: "No se pudo eliminar el producto.", stack: data})
			}
		})
	}
}
module.exports = Producto