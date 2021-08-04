let app = angular.module('app', [])
// Hacemos la abstraccion de la APP del front para el JS
// sintaxis es: libreria.module('nombre', [dependencias])

const API = "http://localhost:3000"

app.controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
	// 
	console.log("running controller ::")

	$scope.titulo = "CRUD Productos ::"

	$scope.showForm = false
	$scope.showList = false

	$scope.query 	= {}

	$scope.showFormFunction = function (){
		$scope.showForm = true
		$scope.showList = false
	}

	$scope.showListFunction = function (){
		$scope.showForm = false
		$scope.showList = true

		// Llamamos el listado de productos 
		// Cuando pido la tabla
		$scope.obtenerListadoProducto()
	}

	$scope.producto  = {}
	// Mock de los datos de la API
	$scope.productos = []

	$scope.guardaProducto = function (){
		console.log("$scope.producto: ", $scope.producto)

		// let model = '/productos/new'
		let model = {
			'crear': ['post', '/productos/new'],
			'editar': ['put', '/productos/']
		}
			
		// Estado por defecto:
		let accion = 'crear'
		let id 	   = ''

		if($scope.producto._id){
			// Estado editar si nos viene la ID
			accion = 'editar'
			id 	   = $scope.producto._id
		}

		// Si el estado es por defecto
		// model['crear'][0] -> 'post'
		let metodo = model[accion][0]

		// model['crear'][1] -> '/productos/new'
		let url    = API + model[accion][1] + id

		$http[metodo](url, $scope.producto).then( function (success){
			console.log("success obj post: ", success)

			if(!success.data.error){
				$scope.producto = {}
				alert(success.data.response)
			} else {
				alert(success.data.error)
			}
			
			
		}, function (error){
			console.log("error obj post: ", error)
		})
	}

	$scope.obtenerListadoProducto = function (){
	
		let model = '/productos'

		$scope.resetMsgs()

		$http.get(API + model).then( function (success){
			console.log("success obj: ", success)
			// Desencapsular el response, que es nuestro array de productos
			let productos = success.data.response

			// Lo cargo en la variable productos que esta "enganchada" al scope
			$scope.productos = productos

		}, function (error){
			alert("Error al obtener productos.")
		})
	}

	$scope.noResults = false
	$scope.noResultsMsg = ''

	$scope.resetMsgs = function (){
		$scope.noResults = false
		$scope.noResultsMsg = ''
		$scope.query.codigo = ''
	}

	$scope.buscarProductoPorCodigo = function (){
		let codigo = $scope.query.codigo.toUpperCase()
		let model = '/productos/buscar/'
		let url   = API + model + codigo

		$scope.resetMsgs()

		$http.get(url).then( function (success){
			console.log("success: ", success.data)

			// Asumimos que nos viene datos
			if(!success.data.error){
				$scope.productos = [success.data.response]
			} else {
				$scope.noResults 	= true
				$scope.noResultsMsg = success.data.error
				$scope.query.codigo = ''
			}
		}, function (error){
			console.log("error buscar producto por Codigo", error)
		})

		console.log("query: ", codigo)
	}

	$scope.seleccionarProducto = function (id){
		let model = '/productos/'
		let url   = API + model + id

		$http.get(url).then( function (success){

			if(!success.data.error){
				$scope.producto = success.data.response
				$scope.showFormFunction()
			} else {
				alert(success.data.error)
			}
		})
	}

	$scope.eliminarProductoPorId = function (id){
		if(confirm("Esta seguro que desea eliminar el producto?")){
			let model = '/productos/'
			let url   = API + model + id

			$http.delete(url).then( function (success){
				if(!success.data.error){
					// alert(success.data.response)

					$scope.obtenerListadoProducto()
				} else {
					alert(success.data.error)
				}
			})
		}
	}
}])

// Creamos la pieza funcional de nuestra webapp desde el controlador
// sintaxis: aplicacion.controller('nombre', [dependencias])