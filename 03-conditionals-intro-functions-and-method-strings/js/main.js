// string
// Dato primitivo
let nombre = "Fernanda"
let apellido = 'Palacios'
let saludo = new String("Hola Amigos")

// concatenar
let nombreCompleto = nombre + " " + apellido

let saludoConMiNombre = "Hola Mi nombre es " + nombre + " " + apellido

console.log(saludoConMiNombre)
console.log(nombreCompleto)

// Template strign

// acento invertido | backtick

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)

// primitive wrapper Object
let someString = "Hola a todos"
console.log(someString.length)





// Funciones
console.log("---------Funciones-------------")
let numberOne = 45
let numberTown = 20

let suma = numberOne + numberTown

// console.log(suma)

let resultado = 100

let someResult = 50
// console.log('variable externa: ',someResult)

// Definición de la funcion
function sumaDeDosNumeros(numero1, numero2) {
    // console.log(numero1, numero2)
    let resultado = numero1 + numero2

    return resultado
}

let resultSuma = sumaDeDosNumeros(100, 20)
console.log(resultSuma) //


function evaluarSiEsMayor(numero1, numero2) {
   let resultado = numero1 > numero2 ? "El primero es mayor" : "El segundo es mayor"
   return resultado
}

let nuevoResultado = evaluarSiEsMayor(10,20)
console.log(nuevoResultado)
