"use strict";

//take input from the user
const number = parseInt(prompt('Enter a number: '));

    //creating a multiplication {table
for (let i = 0; i <= 10; i++){

        //multiple i with user  input number
        const showMultiplicationTable = i * number;

        // display the result
console.log(`${number}  *  ${i} = ${showMultiplicationTable}`);
}