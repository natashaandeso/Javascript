// While loop
// Below is a simple syntax of the while loop
// 1. Initialization of a variable
//2. While keyword
// 3. Condition to be checked
// 4. body of the while loop

let i = 0;

while (i <= 10){
    console.log("The new value of i is: ", i)
    i++
}

console.log("=====================")
// Example of a map loop 
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

console.log("====================")
const users = [
  { name: 'Natasha', age: 25 },
  { name: 'Cindy', age: 30 },
  { name: 'Abby', age: 35 }
];

const names = users.map(user => user.name);

console.log(names); 

// tasks on page 30
for (let i = 1; i<= 19; i+= 2){
        console.log(i);
}

for (let i = 10; i >=1; i--){
    console.log(i);
}