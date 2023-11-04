"use strict";

//exercise 2 take input from the user

const number = parseInt(prompt('Enter a number: '));

    //creating a multiplication {table
for (let i = 0; i <= 10; i++){

        //multiple i with user  input number
        const showMultiplicationTable = i * number;

        // display the result
console.log(`${number}  *  ${i} = ${showMultiplicationTable}`);
}

// Exercise 3 create a random number that output even or odd
for (let i = 0; i < 10; i++) {
    //create a variable that will get the results of the function created
   let rand =  getRandom(i);
    //log the results so the 10 output will output
   console.log() ;{ // check if the random number is even or odd
        if(rand % 2 === 0) { //if even output
            console.log(`${rand} is even`);
        }else{ //if odd output
            console.log(`${rand} is odd`);
        }
    }



//exercise 4 this is a loop inside a loop. The .repeat could be used.
for (let row = 1; row < 10; row ++) {
    let str = `${row}`;
    for (let j = 1;  j <= row; j++) {
        str += row;
    }
    console.log(str)
}


//exercise 5 start at 100 and decrease by 5 until you get to #5
for (let decNum = 100; decNum > 4; decNum -= 5) {
    console.log(decNum);
}


//---------------Section for functions------------
//Exercise 3 - use to generate a random number between 2 and 200

function getRandom(min, max) {
    min = Math.ceil(2);
    max = Math.ceil(200);
    return Math.floor(Math.random() * (max - min) + min);}
}
