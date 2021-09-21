/*
Syntax: Loops in Javascript

for (initialExpression; condition; incrementExpression) {
    Statement;
    "
    "
}*/

console.log(`----------for-Example 1-------------`)
// Exp 1:
// i= index

name= `Paco` //prompt(`type your name`)

for(let i = 0; i < 5; i++){
    console.log(name, i);
}

console.log(`----------for-Example 2-------------`)
// Exp 2:
// Odds

for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0)
    console.log(i)
}

console.log(`----------for-Example 3-------------`)
// Exp 3:
// backwards

for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0)
    console.log(i)
}

/*while (condition) {
    Statement;
    "
    "
}*/
console.log(`-----------while-Example 1-------------`)

// Exp 1:

age = 5;

while(age < 10) {
    console.log(`your age is less than 10`);
    age++;
}