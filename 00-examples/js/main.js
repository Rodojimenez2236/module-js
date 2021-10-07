console.log(`------Loops in Javascript: Syntax and examples------`)
/*
1. for
2. for/in
3. for/of
4. while    - loops through a block of code while a specified condition is true
5. do/while - also loops through a block of code while a specified condition is true
*/



console.log(`----------for-Examples-------------`)
/*
for - loops through a block of code a number of times

Expression-1 is executed (one time) before the execution of the code block.
Expression-2 defines the condition for executing the code block.
Expression-3 is executed (every time) after the code block has been executed.

syntax : for (Expression-1 ; Expression-2 ; Expression-3) {
             Statement;
            }
*/

console.log(`Example 1:`)

name= `Paco` //prompt(`type your name`)

for(let i = 0; i < 5; i++) {
    console.log(name, i);
}


console.log(`Example 2: print odds`)
// Exp 2:
// Odds

for(let i = 0; i <= 5; i++) {
    if(i % 2 !== 0)
    console.log(i)
}


console.log(`Example 3: odds in reverse`)
// Exp 3:
// backwards

for(let i = 5; i >= 1; i--) {
    if(i % 2 !== 0)
    console.log(i)
}




console.log(`----------for in-Examples-------------`)
console.log(`Example 1: over string`)

let string = `Welcome to W3Docs`;

let text2 = "";
for (let i in string) {
    text2 += string[i] + " ";
}
console.log(text2)

console.log(`----------------`)

for (let i in string) {
    console.log(string[i])
}

console.log(`Example 2: over objects`)
/*
for in statement loops through the properties of an Object

exp 1 :
syntax: 
        for ( key in object) {
            code block to be executed
        }

The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/

const person = {
    firstName: `John`,
    lastName: `Doe`,
    age: 25
}

let text = "";
for (let x in person) {
    text += person[x] + " ";
}
console.log(text)

console.log(`----------------`)

for (let i in person) {
    console.log(person[i])
}

console.log(`Example 3: for in over arrays`)
/*
for in statement can also loop over the properties of an Array

syntax:
        for (variable in array) {
            code block to be executed
        }

Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be
accessed in the order you expect.
It is better to use a for loop, a for of loop, or Array.forEach() when the
order is important.
*/

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x] + " "
}
console.log(txt)

console.log(`-------------------`)

for (let i =0; i<numbers.length; i++) {
    console.log(numbers[i])
}

console.log(`Example 4: array.forEach()`)
/*
The forEach() method calls a function (a callback function) once for each
array element.

Note that the function takes 3 arguments:
The item value
The item index
The array itself
The example above uses only the value parameter. It can be rewritten to:

function myFunction(value) {
    txt += value;
}
*/
let txt2 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value + " ";
}
console.log(txt2)

console.log(`-------------------`)

function myFunction2(value, index, array) {
    for (let i =0; i<numbers.length; i++) {   
        console.log(numbers[i])
    }
}
console.log(myFunction2(numbers))

console.log(`-------------------`)

let array = [{
    id: 1,
    name: 'John',
    age: 12
  },
  {
    id: 2,
    name: 'Jane',
    age: 14
  },
  {
    id: 3,
    name: 'Martin',
    age: 13
  },
  {
    id: 4,
    name: 'Katie',
    age: 17
  },
  {
    id: 5,
    name: 'Louis',
    age: 11
  }
];

array.forEach(function(profile, index, arr) {
    console.log(`Index: ${index}, Name: ${profile.name}`);
});

console.log(`----------for of-Examples-------------`)
/*
for/of   - loops through the values of an iterable object
           such as Arrays, Strings, Maps, NodeLists, and more:
*/






console.log(`-----------while-loops-------------`)

/*The while loop loops through a block of code as long as a specified condition is true.

while (condition) {
    Statement;
    "
    "
}*/

console.log(`-----------while-Example 1-------------`)

age = 5;

while(age < 10) {
    console.log(`your age is less than 10`);
    age++;
}




