console.log(`----------exercise 1------`)
/*
1. Pedir 2 numeros al usuario y mostrar en consola el resultado de aplicar
todas las peraciones aritemeticas entre esos dos numeros
*/

// parseInt changes a string into a number or integer
// let number1 = parseInt(prompt(`type in any number`));
// let number2 = parseInt(prompt(`type in a second number`));
// console.log(`you chose the numbers` + " " + number1 + " " + "and" + " " + number2)

// let answer1 = number1 + number2
// let answer2 = number1 - number2
// let answer3 = number1 * number2
// let answer4 = number1 ** number2
// let answer5 = number1 / number2
// let answer6 = number1 % number2

// console.log(number1+ " " + "+" + " " + number2 + " " + "=" + " " + answer1)
// console.log(number1+ " " + "-" + " " + number2 + " " + "=" + " " + answer2)
// console.log(number1+ " " + "*" + " " + number2 + " " + "=" + " " + answer3)
// console.log(number1+ " " + "**" + " " + number2 + " " + "=" + " " + answer4)
// console.log(number1+ " " + "/" + " " + number2 + " " + "=" + " " + answer5)
// console.log(number1+ " " + "%" + " " + number2 + " " + "=" + " " + answer6)


console.log(`----------exercise 2------`)
/*
Pedir al usuario dos numeros y escribir en consola si el primer numero es mayor
que el segundo
*/

// let number1 = parseInt(prompt(`type in any number`));
// let number2 = parseInt(prompt(`type in a second number`));
// let answer = number1 > number2

// console.log(`is` + " " + number1 + " " + ">" + " " + number2 + " " + answer)


console.log(`----------exercise 3------`)
/*
pedir al usuario dos letras, y determinar si la primera aparece antes o despues
en el alfabeto
*/

// let letter1 = prompt(`type in a letter`)
// let letter2 = prompt(`type in a second letter`)
// console.log(`the two letters you chose were` + " " + letter1 + " " + "and" + 
// " " + letter2)

// .charCodeAt gives the number value in the UTF (ASCII) Table
// .charCodeAt(index in string)
// firstLetter = letter1.toLocaleLowerCase().charCodeAt(0) - 96
// secondLetter = letter2.toLocaleLowerCase().charCodeAt(0) - 96

// ternary operator: short way to write a simple if els block
// ternary operator: variable_name(conition) ? value_if_true : value_if_false
// function answer() {
//     return (firstLetter > secondLetter ? `after` : `befor`);
//   }

//  console.log(`the letter` + " " + letter1 + " " + "is" + " " + answer() + " " +
//  "the letter" + " " + letter2 + " " + "in the alphabet")


console.log(`----------excercise 4------`)
/*
pedir 2 variables por promot:
    -si a > b dividir a entre b
    -si a < b sumar a mas b
    -si a == b multiplicar ambos numeros
    Imprimir el resultado en consola
*/



console.log(`----------exercise 5------`)
/*
Pedir al usuario por prompt un numero entre 1 y 100
    -verivicar si es nu par o impar e emprimir en resultado en consola
*/


console.log(`----------exercise 6------`)
/*
Pedir al usuario 2 numeros
    -Imprimir en consola cual es el menor de los dos
    -Imprimir en consola cual es el mayor de los dos
*/



console.log(`----------exercise 7------`)
/*
Pedir al usuario los siguientes datos (nombre, peso actual en lbs.):
    -Calcular el peso que tendria esa persona en la luna e imprimirlo en consola
    -Calcular el peso que tendria esa persona en Mars e imprimirlo en consola
    -Calcular el peso que tendria esa persona en Jupiter e imprimirlo en consola
*/

// let name = prompt(`type you full name`)
// let weight = prompt(`type your weight in lbs.`)
// let moon = weight * .165
// let mars = (weight/9.81) * 3.711
// let jupiter = (weight/9.81)*24.79


// console.log(name)
// console.log(weight +" " + 'lbs')
// console.log(`your weight in the Moon would be`+ " " +moon +" " + 'lbs')
// console.log(`your weight in the Mars would be`+ " " +mars +" " + 'lbs')
// console.log(`your weight in the Jupiter would be`+ " " +jupiter +" " + 'lbs')


console.log(`----------exercise 8------`)
/*
Pedir al usuario la calificacion de un examen (entre 0 y 100)
    -Imprimir en consola las equvalencias en letra su calificacion, es decir:
        -si es mayor o igual a 90, imprimir "A"
        -si es mayor o igual a 80 y menor que 90, imprimir "b"
        -si es mayor o igual a 70 y menor que 80, imprimir "c"
        -si es mayor o igual a 60 y menor que 70, imprimir "d"
        -si es menor que 60, imprimir "f"
*/

