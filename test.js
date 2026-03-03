function greet(name) {
    console.log("Hello " + name,",how are you");
}
function processUser(callback) {
    const name = "Natasha";
    callback(name);   // calling the function passed in
}
processUser(greet);

const multiply = (number1, number2) =>{
    let product = number1 ** number2
    console.log("The product of the numbers is: " + product)
}

multiply(3, 6);
multiply(6, 9);
