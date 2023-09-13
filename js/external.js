"use strict";

//console.log('Hello from external JavaScript!');

//let myAge = 25;
/*====ALERT ====

alert("Welcome to my website");

console.log('alert!');*/

/*====PROMPT ====*/

/*let favoriteColor = prompt ("What iis you r favorite color?");

alert(`${favoriteColor} is my favorite color too!`);

console.log('alert');*/


/*====CONFIRM ====*/

/*
let userChoice  = confirm("Wait! Don't leave yet! Can I chat with you?");

 if (userChoice === true) {
     console.log("yay!")
 } else  {
     console.log("boo");
 }

console.log(userChoice);
*/

/*====PROMPT from previous lesson exercise #3====*/
/*Notes:
Pay:
$400, Amazon
$380,
$350 Facebook

Hours:
    4 hours for Amazon
    6 hours for Google
    10 hours for Facebook*/

alert("Welcome to the pay calculator");
console.log(alert)

let amazonRate = prompt ("How much does Amazon pay per hour?");
alert(`You entered $ ${amazonRate}.`);
console.log(alert);


let googleRate = prompt ("How much does Google pay per hour?");
alert(`You entered $ ${googleRate}.`);
console.log(alert );

let facebookRate = prompt ("How much does Facebook  pay per hour?");
alert(`You entered $ ${facebookRate}.`);
console.log(alert );

let amazonHours = prompt ("How  hours did you work at Amazon?");
alert(`You entered  ${ amazonHours } hours`);
console.log(alert);

let googleHours = prompt ("How  hours did you work at Google?");
alert(`You entered  ${ googleHours } hours`);
console.log(alert);

let facebookHours = prompt ("How  hours did you work at Facebook?");
alert(`You entered  ${ facebookHours } hours`);
console.log(alert);

let  amazonPay = (amazonRate * amazonHours);
let  googlePay = (googleRate * googleHours);
let  facebookPay = (facebookRate * facebookHours);

let  totalPaid= (amazonPay + googlePay + facebookPay);
alert(`You were paid a total amount of $  ${totalPaid }.`)
console.log(alert);
