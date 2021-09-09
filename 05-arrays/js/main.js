
/*
let someArray = [ ]
    "sting"
    "true or false"
    "function () {}"
    "names"
    [  ]
*/

//let arrayKoders = [
//    "Paco",
//    "Clau",
//    "Fanny",
//    "Nancy",
//    "Pablo",
//]

/* Hola, mi nombre es ${nombre

//for (let i = 0; i < arrayKoders.length; i++) {
//    console.log (`Hola, Mi nombre es ${arrayKoders[i]}`)
//}

//console.log (arrayKoders)

/*Metodos de array */
/*
.push()  Agrega uno o mas items al final del array
*/
//arrayKoders.push("Emi", "Pao", "Mike")

//console.log (arrayKoders)

/*
.pop () removes the last item in the array,
and gives the item that was removed
*/

//console.log(arrayKoders.pop())

/*
.reverse () gives the list of items in array
from last to first
*/

//console.log(arrayKoders.reverse())

/*
array.shift () removes the first item in the array,
and gives the item that was removed
*/

//console.log(arrayKoders.shift())

/*
array.unshift () adds an item to the start of the array
*/

//console.log(arrayKoders.unshift("Hiram"))

/*
array.concat () adds items to the array
*/

//let arrayKoders10ma = ["Cintia", "JuanPi", "Vero"]
//let arrayAllKoders = arrayKoders.concat(arrayKoders10ma)
//console.log (arrayAllKoders)

/*
.splice (index, howmany, items..., itemN)
arrayAllKoders.splice(2,2)
arrayAllKoders.splice(4,1,"Pablo", "Nancy")
arrayAllKoders.splice(2, 0, "Paco")
*/

// Ejercicio 1:

/* crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombres completos de koders como se haya indicado,
y que imprima el nombre del koder y su numero asignado.

Ejemplo:
input
    Emi de Leon
    Elias Herrera
    Armando Rios

output:
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios
*/



//ask how many koder names you will be adding
//save to a veriable
//ask for indivisual koder names
// use for until the number specified



let arrayKoderNames = [
]




//arrayKoderNames.push =


for (let i = 0; i < arrayKoderNames.length; i++) {
    console.log (`koder ${i + 1} ${arrayKoderNames[i]}`)
}