// Javascript Functions
// A function is a block of code that performs a certain action/task
// The simple structure of a function is given in below:
// function keyword, name of the function, parenthesis the body of the function inside of curlybraces.
function sayHello(){
    console.log("Hello there, Hope you are having a good day?")
}

// call/invoke the function by use of the name of the function
sayHello()

// example 2
function sayGoodbye(){
    console.log("Good bye, have a nice day and a weekend ahead...")
}

// call the function
sayGoodbye()

// Research on arrow funtion, functionswith parameters and anonymous functions in javascript.
// arrow function
const greet = () => {
    console.log("Hello!");
}

greet();

// With parameters
function multiply(a, b){
    return a * b;
}

console.log(multiply(4, 5))

// Anonymous function
let name = function(){
    console.log("Natasha");
}

name()