//  Arrow functions
//  This is a function that was introduced in the ECMA Script 6 and they give the latest/modern way of defining functions in compact manner.
//  at times the arrow functios can be said to be anonymous functions why? This is because they use the names of the variables they are contained in.


const sayHello = () => {
    console.group("This is an Arrow Function.")
}

sayHello();

console.log("======================")
// create an arrow function that is able to find the product of three numbers

const product = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();