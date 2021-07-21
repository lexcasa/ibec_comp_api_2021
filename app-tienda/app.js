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

		let model = '/productos/new'
		$http.post(API + model, $scope.producto).then( function (success){
			console.log("success obj post: ", success)
			alert(success.data.response)
			
		}, function (error){
			console.log("error obj post: ", error)
		})
	}

	$scope.obtenerListadoProducto = function (){
		let model = '/productos'

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
}])

// Creamos la pieza funcional de nuestra webapp desde el controlador
// sintaxis: aplicacion.controller('nombre', [dependencias])