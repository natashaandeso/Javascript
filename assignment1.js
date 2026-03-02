// Example of an object data type and how to access data
let person = {
    age: 24,
    firstName:"Natasha",
    lastName: "Andeso"
};
console.log(person["age"])
console.log(person.firstName)

let KeyName = "lastName";
console.log(person[KeyName])

// Array data Types
const counties = ["Nairobi", "Mombasa", "Naivasha", "Machakos" ]
console.log(counties[1]);
console.log(counties[counties.length -1])

// What is the difference between a dictionary in python, an object in Javascript and a json data when dealing with  APIs
// Triple equal sign - Research in javascript

let distance = 101

if(distance <= 100){
    console.log("Amount to pay is: 5 USD")
}
else if (distance <= 500){
    console.log("Amount to pay is: 10 USD")
}
else if (distance <=1000){
    console.log("Amount to pay is: 20 USD")
}
else{
    console.log("Amount to pay is: 40 USD")
}

