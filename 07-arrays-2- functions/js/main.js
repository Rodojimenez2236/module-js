/* ejercicio

const arrayKoders = [
    "Fanny Alvarez",
    "Elias Herrera",
    "Kraken Perez Salinas",
    "Clau Rodriguez",

]

function addKoder() {
    let koder = prompt("type koders name")
    arrayKoders.push(koder)
}

function printKoders() {
    for(let i=0; i<arrayKoders.length; i++) {
        console.log(`koder ${i+1}: ${arrayKoders[i]}`)
    }
}

function koderWithInitials() {
    let arrayKodersWithInitials = []
    for(let i=0; i<arrayKoders.length; i++) {
        console.log(arrayKoders[i])
        let arrayWords = arrayKoders[i].split(" ")
        let initials = getInitials(arrayWords)
        console.log(initials)
    }
}

function getInitials(wordsArray) {
    let initials = ""
    for(let i=0; i < wordsArray.length; i++) {
        initials += wordsArray[i].charAt(0).toUpperCase() + "."
    }
    return initials
}
*/

// Arrow funcitions
/*
const myFunction = (perameters,...,perameters)=> {
    Sentences or body
}

(perameters,....,perameters)=> {
    Sentences or body
}
*/

/*
function suma(a, b) {
    return a+b
}

let resultSuma = suma(3,5)
console.log(resultSuma)

let addition = function (a, b) {
    return a + b
}
console.log(addition(10, 15))

const resta = (a, b)=> {
    return a-b
}

console.log(resta(20, 5))
let resutResta = resta(10, 5)

console.log(resutResta)
console.log(resta(20, 2))
*/

/*
const arrayKoders = [
    "Fanny Alvarez",
    "Elias Herrera",
    "Kraken Perez Salinas",
    "Clau Rodriguez",
]

const splitKoders = (array) => {
    let splittedNames = []
    for(let i = 0; i < array.length; i++) {
        splittedNames.push(array[i].split(" "))
    }
    return splittedNames
}

//let someArray = splitKoders(arrayKoders)

//console.log(someArray)

function printKoders(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let someArray = splitKoders(arrayKoders)
printKoders(someArray)

console.log("......")

// using the return function as an argument
printKoders(splitKoders(arrayKoders))


// di solo recibe un parametro podemos omitir los parentesis

/*
const printKoders = array => {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
*/
// Cuando recibamos  o mas parametros es necesario agregar los parentesis
/*
const multiplicacion = (a, b) => {
    return a* b
}

/*
return Implicito
si lo que ejecutando en me funcion
se puede reduice a una sola linea,
no necesitaremos las llaves, ni el return
*/

const multiplicacion = (a, b) => a* b

const resultMulti = multiplicacion(10, 2)
console.log(resultMulti)

/*
ejercicio-
-Funcion que me regrese un nemero alteatorio desde 0 hasta array.length

-Funcion que reciba el indice para imprimir el nombre
*/
