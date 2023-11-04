"use strict"

/*Write a function attat acceps an array of numeric vaules and returns the average of those values. */

function averageofArrayNums(arrayofNums) {
    const  numNums = arrayOfNums.length;
    let sum = 0;
    for (let i = 0; i  < arrayofNums.length; i++) {
        sum += arrayofNums[i];
    }
    return sum/ numNums;
    console.log(averageofArrayNums(arrayofNums));
}

