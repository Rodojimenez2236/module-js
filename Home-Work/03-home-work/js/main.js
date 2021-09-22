console.log('----------Home work----------')


console.log('----------Excersice 1----------')
/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Fernanda"
    input Apellido = "Palacios Vera"
    Output: "fernanda PALACIOS VERA"
*/

// let firstName1 = prompt (`type your first name`);
// let lastName1 = prompt (`type your last name`);

// .toLocaleLowerCase() changes all string atached to lower case letters
// .toLocaleUpperCase() changes all string atached to upper case letters

//console.log (firstName1.toLocaleLowerCase() + " " + lastName1.toLocaleUpperCase());


console.log('----------Excersice 2----------')
/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

// let fullName = prompt (`type your full name`);
// let subtractSpaces = fullName.split(" ").length -1;
// let fullNameNoSpaces = fullName.length - subtractSpaces

// console.log(subtractSpaces)
// console.log(`your name` + " " + fullName + " " + `has` +
//  " " + fullNameNoSpaces + " " + `characters`);

// .split(separator, limit) is a method that splits strings using 
//  a seperator and or limit 


console.log('----------Excersice 3----------')
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// let fullName = prompt (`type your full name`);

// function countVowels (str) {
//     // find the count of vowels
//     let count = str.match(/[aeiou]/gi).length;
//     // retun number of vowels
//     return count;
// }

// let result = countVowels(fullName);
// console.log(`your name` + " " + fullName + " " + `has` +
// " " + result + " " + `vowels`);



console.log('----------Excersice 4----------')
/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

// let text = `"Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
// al estudiante que tiene a su lado"`;

// function countWord (str) {
//     // count how many times "estudiante" appears in the string
//     let count = str.match(/estudiante/g).length;
//     return count;
// } 

// let result = countWord(text);
// newText = text.replace(/estudiante/g, "koder");

// console.log(`in the text` + " " + text + " " + `the word "estudiante" appearse` +
// " " + result + " " + `times`);
// console.log(`---replace the word estudiante for koder---`);
// console.log(newText);


console.log('----------Excersice 5----------')
/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

let string1 = prompt(`input first string`);
let string2 = prompt(`input second string`);

if (string1 > string2) {
    console.log(`string 1 is longer than string 2`);
}
    els {
    console.log(`string 2 is longer than string 1`);
}


console.log('----------Excersice 6----------')
/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/