// Javascript For Loop
// Loops are used to iterate through something(Repeate something a number of times)
// structure of the for loop
// 1. For keyword followed by parenthesis
// 2. initialization; set the condition ; increment/decrement
// 3. Body of the for loop


for(let i = 0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}

console.log("======================")

for(let i = 0; i <= 10; i++)
if(i == 6){
    console.log("This is number six: ", i)
}
else{
    console.log("The new value of i is: ", i)
}

// Create a for loop that is able to print out all the leap years from 200 to 2026

for(let i = 2000; i <= 2026;){
    console.log(i);
    i+4;
}
// check page 28
for (let i= 1; i <= 19; i += 2){
    console.log(i);
}

console.log("=====================")
// question two
for (let i= 10; i>= 1; i--){
    console.log(i);
}

console.log("==============================")
// question three
let numbers = [10, 20, 4, 45, 99, 1];

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("The largest number is: ", largest)

console.log("============================")
// question four
for (let i = 1 ; i <= 10; i++){
    console.log("5 * " + i + "=" + (5 * i));
}