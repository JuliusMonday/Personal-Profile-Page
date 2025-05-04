// variables in javascript

let num1 = 20;
let num2 = 15;

// console.log(num1 + num2)
// Arithematic oprators
// console.log(num1 + num2 + " addition")    // addityion c
// console.log(num1-num2 + " Substraction") // substraction
// console.log(num1*num2 + " multiplication")// multiplication
// console.log(num1/num2 + " Division")// division
// console.log(num1 % num2 + " Modulus")// remainder/modulus


console.log("------------------")
// comparison operator

// console.log(`${2 == 5} Equal to:==`)
// console.log(`${2 === "2"} Equivalent: type and value to:===`)
// console.log(`${2 != 5} NotEqual to:!=`)
// console.log(`${2 !== 5} Check for type and value inequality:!==`)
// Relational operators
// console.log(`${2 > 5} Greater than: >`)
// console.log(`${2 < 5} Less than: <`)
// console.log(`${2 >= 5} Greater than or equal`)
// console.log(`${2 <= 5} Less than or equal to: <=`)

// logical operators
// console.log(`${true && false} Logical AND: &&`)
// console.log(`${true || false} Logical OR: ||`)
// console.log(`${!true} Logical NOT: !`)

// control flow
// if statement
// if (num1 > num2) { 
//     console.log(`${num1} is greater than ${num2}`)
// } else {
//     console.log(`${num1} is less than ${num2}`)
// }

// check for positive and negative and also odd and even number

let numChecker = 21;
// if (numChecker > 0) {
//     console.log(`${numChecker} is a positive number`);
//     console.log("------------------")
//     if (numChecker % 2 === 0) { 
//         console.log(`${numChecker} is also an even number`);
//     } else {
//         console.log(`${numChecker} is also an odd number`);
//     }
// } else {
//     console.log(`${numChecker} is a negative number`);
// }

// loops
// for loop
// for (let i = 0; i <= 5; i++) { 
//     console.log(`Iteration ${i}`);
// }

// multiplication table using for loop
let multiplier = 3;
for (let num = 0; num <= 12; num++ ){
    console.log(`${multiplier} x ${num} = ${num*multiplier}`)
}