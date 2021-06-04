// Requiero los modulos
const calc = require('./calculadora')

// Logica 

let b = 10
let h = 5

let area = 0

// Calcular el area 
area = calc.divi( calc.multi(b, h), 2)


// mostrar datos
console.log("area: ", area)
