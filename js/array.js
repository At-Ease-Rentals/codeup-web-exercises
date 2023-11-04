"use strict";

    let fruits = ["apple","peach","banana", "orange", "grapes"];
    let length = fruits.length
     console.log(fruits);
    /*console.log(length);
    console.log([0]);*/

    let last = fruits.length - 1;
    console.log(prettyArrayString(fruits));

/*
    let nums = [1, 2, 3];
    console.log(nums);

    let godKnowsWhat = ["stuff", 1, "more stuff"];
    console .log(godKnowsWhat);
*/

// print all fruits
/*for (let i = 0; i <= last; i++) {
    console.log(fruits[i]);
}

for (let i = last; i > 0; i--)  {
    console.log(fruits[i]);
    if(fruits[i] === "orange") {
        continue;
    }
    console.log(fruits);
}*/

//Functions
 function prettyArrayFruits(arr) {
     let arrString = "";

     for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
        arrString += ',';
    }
    arrString += arr[i];
     }
     return arrString;
 }