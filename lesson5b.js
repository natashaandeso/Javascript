// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are good.")
}

greet("Natasha");
greet("Joseph");

// Example two
console.log("=====================")
// Below is a function to find the area of a circle
const pi = 3.142
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}

CircleArea(pi, 7);
CircleArea(pi, 28);

console.log("==================")
// come up with your own example of an arrow function that utilises 3 parameters
const multiply = (number1, number2, number3) =>{
    let product = number1 * number2 * number3
    console.log("The product of the numbers is: " + product)
}

multiply(3, 6, 8);
multiply(6, 9, 10);