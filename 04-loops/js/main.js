/*
console.log(`ejercicio 2`);
let firstName = prompt(`type your first name`);
let lastName = prompt('type your last name');
let fullName = firstName + lastName;

console.log('your name has' + " " + fullName.length);


console.log('ejercicio 3')
let firstName = prompt(`type your first name`);
let lastName = prompt('type your last name');
let fullName = firstName + lastName;

function countVowels(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const result = countVowels(fullName);

console.log(fullName);
console.log('your name has' + ' ' + result + ' ' + 'vowels');


console.log(`ejercicio 4`);

let str = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
let newStr = str.replace (/estudiante/g, "koder");

console.log(newStr)


console.log(`ejercicio 5`);

let str1 = `Hi my name is Johndoe`.length
let str2 = `What is your name`.length

if (str1 > str2) {
    console.log('string 1 is larger');
}   else {
    console.log('string 2 is larger');
}
*/
// change to use split

/*
console.log(`ejercicio 6`);
let text = prompt ('type to a string of two words');
*/

//ejercicio 1

// <--------------Proceso-------------->
// 1. solicitar texto a usuario
// 2. almacenar en una variable = texto
// 3.solicitar la pallabra a buscar
// 4. almacenar entrada una
// 5. cambiar frase a minusculas
// 5. hacer conteo de palabra solicitada en frase 
// 6. mostrar coincidencias
/*
let frase = prompt("Ingrese frase solicitada")
let palabra = prompt("Ingrese palabra que desea buscar")

function gugul (frase, palabra) {
    let fraseminus = frase.toLocaleLowerCase()
    let banderas = 'gi'
    let palabraclave = new RegExp(`${palabra}`, banderas)
    
    let numeroPalabras = fraseminus.match(palabraclave).length;    
    let resultado=`La palabra ${palabra} se repitio ${numeroPalabras} veces, ${frase}` 
    return resultado
}
    console.log(gugul(frase, palabra))

function operations (numero1, numero2, operation) {
    switch (operation) {
        case "suma":
            result = numero1 + numero2
            break;
        case "resta":
            result = numero1 - numero2
            break;
        case "multiplicacion":
            result = numero1 * numero2
            break;
        case "division":
            result = numero1 / numero2
            break;
        default:
            alert("No existe esta operacion")
            break;
    }

    return ` El sesultado de la operacion "${operacion}" de los numeros es: ${result}`
}

let operationChoiced = prompt("ingresa que ioeracion quieres realizar opcion1 = suma")
let number1 = parseInt(prompt("ingresa el valor de numero 1"))
let number2 = parseInt(prompt("ingresa el valor de numero 2")) //convertir de string a un numero entero

operation(numero1, number2, operationChoiced)
*/


/*
Deducir:
input:"kodemia"
output: 
*/

/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/
/*
let kodemia = prompt("type kodemia");

console.log(kodemia)
*/
/*
let str = prompt ("give me a large string")
let lengthStr = str.length

let result = ""

for (let index = 0; index < lengthStr; index++) {
    if (index % 2 === 0) { //chek if Par
        result += str.charAt(index).toUpperCase ()
    } else {
        result += str.charAt (index).toLocaleLowerCase ()
    }
}

console.log ('Input: ', str)
console.log ('Output: ', result)
*/


/*
//Ejercicio 5:

let number = prompt("*")
let result = ""


for (let index = 1; index <= 10; index ++) {
    result = index * number
    console.log(result)
}
*/
/*
ejercico 1

let strReverse = prompt("type a word")

let strLenth = strReverse.length
let result = ""

for (let index = (strLenth-1); index >= 0; index --) {
    result += strReverse.charAt(index)
}

console.log (result)
*/

//Ejercicio 2:

/*
let number = prompt("type a number between 1 and 10")
let result = ""


for (let index = 1; index <= 10; index ++) {
    result = `${index} * ${number} = ${index * number}`
    console.log(result)
}
*/

let name = "Fernanda"

console.log (name.substring (3,6))
console.log (name.slice (5,7))