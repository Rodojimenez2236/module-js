//alert('hola')

/*console.log("Hola Koder")

console.error("Esto es un error")

console.warn("Esto es warning")

// 3 metodos interartuar con el usuario

//alert("Esto es un mensaje para los Koders!!")

let name = prompt("Ingresa tu nombre")
// regresa un string

console.log(name)

//Operadores
/*
    +
    -
    *
    /
    %
    ()
    */

 /*   let operation = 5 + (5 - 10) * 3
    console.log(operation)

    let division = 5 / 2
    console.log(division)

    let residuo = 5 % 2
    console.log(residuo)

// Aritmeticos

// Relacionales

/*
>
<
>=
<=
==
===
!=
!== (superdiferente xD)
*/

/*console.log(8 > 9)
console.log(9 > 8)
console.log(8 >= 9)
console.log(9 >= 8)
console.log(7 < 7)
console.log(7 <= 7)

let string1 = "Hola"
let string2 = "Hola Koder"

console.log(String1 > string2)

console.log('----------------')

// Asignacion

/*
= -> Asignar un valor a una variable
== -> Comparacion de valores
=== -> Comparacion de tipo de datos y del valor

*/
/*/*console.log(7 == 7)
console.log("7" == 7)
console.log("7" === 7)

/*

+=

*/

/*let number1 = 1

number1 = number1 + 5
number1 += 10
number1 /= 2
number1 -= 10

console.log(number1)



// Incremento / Decremento

let number2 = 2

number2++
number2--

/*let number3 = 2
undefined
number3++
2
number3
3
let number4 = 2
undefined
++number4
3*/


/*console.log(number2)*/

// Logicos


//1 Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números
//2 Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.
//3 Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.

//1
/*let primerNumero = prompt('Dame un numero');
let segundoNumero = prompt('Dame otro numero');

primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);

console.log(typeof(primerNumero));

let resultadoAdd = primerNumero + segundoNumero;
let resultadoSubtract = primerNumero - segundoNumero;
let resultadoDivide = primerNumero / segundoNumero;
let resultadoMultiply = primerNumero * segundoNumero;
let resultadoPercentage = primerNumero % segundoNumero;

console.log(resultadoAdd);
console.log(resultadoSubtract);
console.log(resultadoDivide);
console.log(resultadoMultiply);
console.log(resultadoPercentage);
*/

/*let name = prompt('como te llamas')

if(!name) {
    console.log('no se ingreso datos')
}   else {
    console.log()
}


if (primerNumero > segundoNumero && primerNumero > 100) {
    console.log(`el primer numero es mayor que el segundo y mayor que 100`)
    //se ejecuta este codigo
} else {
    console.log(`el primer numero es menor que el segundo`)
}*/

//1
/*let primerNumer = prompt('Dame un numero');
let segundoNumer = prompt('Dame otro numero');

primerNumer = Number(primerNumer);
segundoNumer = Number(segundoNumer);

console.log(typeof(primerNumero));

let resultado = primerNumer + segundoNumer;
let resultado = primerNumer - segundoNumer;
let resultado = primerNumer / segundoNumer;
let resultado = primerNumer * segundoNumer;
console.log(resultado);

let primerNumer = prompt('Dame un numero');
let segundoNumer = prompt('Dame otro numero');

primerNumer = Number(primerNumer);
segundoNumer = Number(segundoNumer);

console.log(primerNumer > segundoNumer);

console.log( 'este es el resultado' + resultado);

console.log( '')*/

//Operadores Logicos

// &&
// ||
// !value

// if (primerNumero > segundoNumero){
//    console.log('el primerNumero es mayor que el segundo')
//    se ejecuta este codigo
//}   wlse if (primerNumero === segundoNumero) {
//        console.log('les numeros son iguales')
//} else{
//     console.log('el primer numero es menor que el segundo')
//}



// let weight = prompt(`what is your weight in lbs.`)

// weight = Number(weight)

// let resultadoMoon = weight * .165
// let resultadoMars = (weight / 9.81) * 3.711
// let resultadoJupiter = (weight / 9.81) * 24.79

// console.log(resultadoMoon)
// console.log(resultadoMars)
// console.log(resultadoJupiter)

/*let edad = 24

if(age >= 18){
    console.log("Eres mayor de Edad")
}   else {
    console.log("Eres menor de Edad")
}*/

              //condicion ? si se cumple la condicion : si no se cumple
/*let eresMayor = edad >= 18 ? "Eres mayor de Edad" : "Eres menor de Edad"

console.log('Validacion desde el oper ternario: )*/


/*

domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6

*/

// let today = 2

// switch(today) {
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Martes")
//         break;
//     case 3:
//         console.log("Miercoles")
//         break;
//     case 4:
//         console.log("Jueves")
//         break;
//     case 5:
//         console.log("Viernes")
//         break;
//     case 6:
//         console.log("Sabado")
//         break;
// }

//--------------------------------------------------------

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/

// let firstName = prompt (`type your first name`)
// let lastName=prompt(`type your last name`)

// console.log(firstName.toLowerCase()+" "+lastName.toUpperCase())

// let name1= firstName.toLowerCase()
// let name2= lastName.toUpperCase()

// console.log(name1+" "+name2)

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

let fullName=prompt(`type your full name`)
let splitName=fullName.split(" ")

function namelength(sting) {
    for(let i=0; i<splitName.length; i++) {

    }
}

console.log(splitName)

//console.log(`your name`+ " "+fullName+" "+`has`+" "+fullNameLength+" "+`charaters`)

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/


/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/
/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/