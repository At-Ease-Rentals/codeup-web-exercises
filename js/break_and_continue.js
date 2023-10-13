"use strict";

//Break and Continue exercises
//Exercise 1 done.
//Exercise 2
//Prompt use for an odd number  between 1 and 50.
/*let userNum = parseInt(prompt('Please enter an odd number between 1 and 49:  '))*/

//--------Functions called---------//
let allCones = Math.floor(Math.random() * 51) + 50; // Randomly set the total number of cones between 50 and 100

do {
    let conesToBuy = Math.floor(Math.random() * 5) + 1; // Randomly set how many cones a customer wants (between 1 and 5)

    if (conesToBuy <= allCones) { // Check if there are enough cones to sell
        console.log(conesToBuy + " cones sold..."); // Tell how many cones were sold
        allCones -= conesToBuy; // Subtract the sold cones from the total
    } else {
        console.log("Cannot sell you " + conesToBuy + " cones. I only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!"); // When there are no more cones, the seller can go home
