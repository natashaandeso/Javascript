// Exporting modules
// We export modules so that we can use/utilize them in other files/modules in our program

export const calculator = (x, y) =>{
    let difference = x - y
    
    console.log("The difference of the two numbers is: ", difference)
};

export const simpleInterest = (principel,   rate, time) =>{
    let si = (principel * rate * time) / 100
    console.log("The simple interest gained is: ", si)
};

const bmi = (weight, height)=>{
    let answer = weight / (height **2)

    console.log("TGhe BMI of the person is: ", answer, "kg/m\u00b2")
};

export {bmi}