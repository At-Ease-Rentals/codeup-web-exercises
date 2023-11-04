"use strict";

const number = parseInt(prompt('Enter a number: '));

for (let i = 1; i <= 10; i++) {
    const showMultiplicationTable = i * number;
    console.log(`${number} x ${i} = ${showMultiplicationTable}`);
}

for (let i = 0; i < 10; i++) {
    //create a variable that will get the results of the function created
    let rand = getRandom(i);
    //log the results so the 10 output will output
    console.log();
    { // check if the random number is even or odd
        if (rand % 2 === 0) { //if even output
            console.log(`${rand} is even`);
        } else { //if odd output
            console.log(`${rand} is odd`);
        }
    }
}

function getRandom(min, max) {
    min = Math.ceil(2);
    max = Math.ceil(200);
    return Math.floor(Math.random() * (max - min) + min);
}



for (let row = 1; row < 10; row ++) {
    let str = `${row}`;
    for (let j = 1;  j <= row; j++) {
        str += row;
    }
    console.log(str)
}


for (let decNum = 100; decNum > 4; decNum -= 5) {
    console.log(decNum);
}
