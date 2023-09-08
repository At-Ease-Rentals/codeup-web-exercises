"use strict";

//let myAge = 25;
/*====ALERT ====*/

//alert("Hello, I am an alert!");
//
//     console.log("alert!")
/*====CONFIRM ====*/

// let userChoice  = confirm("Wait! Don't leave yet! Can I chat with you?");
//
// if (userChoice === true) {
//     console.log("yay!")
// } else  {
//     console.log("boo");
// }
//
// console.log(userChoice);

/*====PROMPT ====*/

let currentSpeed = prompt ("How fast are you driving?");
let plannedSpeed = prompt ("How fast do you want to drive?");
let distanceLeft = prompt ("How many miles do you have left?");

let timeAtCurrentSpeed = (distanceLeft / currentSpeed) * 60;

let timeAtPannedSpeed = (distanceLeft / plannedSpeed) * 60;

console.log(`At your current speed you will take ${ timeAtCurrentSpeed }  minutes.`);
console.log(timeAtPannedSpeed);