//alert('hola')

// string

//Dato primitivo
let nombre = "Fernanda"
let apellido = 'Palacios'
let saludo = new String("Hola Amigos")

// concatenar
let nombreCompleto = nombre + "" + apellido

let saludoConMiNombre = "Hola Mi nombre es" + "" + apellido

console.log(saludoConMiNombre)
console.log(nombreCompleto)

// Template string

// acento invertido | backtick

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)

// primitive wrapper Object
let someString = "Hola a todos"
console.log(someString.length)

// function - some name(parametros){
//      cuerpo de la funcion
//}

console.log('-------Funciones---------')

// Funciones

let numberOne = 45
let numberTwo = 20

let suma = numberOne + numberTwo

//console.log(suma)



// Definicion de la funcion
function sumaDeDosNumeros(numberOne, numberTwo) {
    //let numberOne = 45
    //let numberTwo = 20

    let resultado = numberOne + numberTwo

//    console.log(suma)

    return resultado
}

//  console.log("200" + 20)

// Invocacion de la funcion
//sumaDeDosNumeros(100, 20)
//sumaDeDosNumeros(100, 30)
//sumaDeDosNumeros(100, "100")
//console.log(sumaDeDosNumeros (100, 20))
//let resultadoSuma = sumaDeDosNumeros (200, 10)
//console.log(resultadoSuma)

//console.log(resultado)

let resultSuma = sumaDeDosNumeros(100, 20)
console.log(resultSuma)

function evaluarSiEsMayor(numero1, numero2) {
    let resultado = numero1 > numero2 ? "El primero es mayor" : "El segundo es mayor"
    return resultado
}

let nuevoResultado = evaluarSiEsMayor(10, 20)
console.log(nuevoResultado)

// Ejercicios

/*
Ejercicio 1

Solicitar al usuario su nombre u sus apellidos
regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas

input nombre = "Fernanda"
input Apellido = "Palacios Vera"

Output: "fernanda PALACIOS VERA"
*/

console.log("Ejercicio 1")
    let firstName = prompt ("Write your firt name")
    let lastName = prompt ("Write your last name")
    firstName = firstName.toLowerCase()
    lastName = lastName.toUpperCase()

console.log(firstName + "" + lastName)