// Anonymous Functions in Javascript
//  These are functions that exist without a name.

//  Below is an example of such functions:
//  The below function shall take the name of the variable they are contained in.

const greet = function(){
    console.log("Hello there, hope your Monday is fine....")
}

console.log(typeof(greet))
greet();


//  Below is another anonymous function(anonymous self executing function)
(function(){
    console.log("Welcome to the world of programming....")
})();

// Read on arrow functions with and without parameters
// arrow functions without parameters
const county = () =>{
    console.log("You are in Mombasa")
}

county();

// arrow functions with parameters
const multiply = (a, b) =>{
        return a * b;
}
console.log(multiply(4, 6));
// research on modules in javascript
import multiply from "./math.js"
console.log(multiply(8, 5))