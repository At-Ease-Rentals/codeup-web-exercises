"use strict";

// let count = 0;
// let max = 10;
// let interval = 1000; //interval time in milliseconds this is one second
//
// const intervalId = setInterval( () => {
//     console.log (count);
//     if  (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

const delay = 5000; //delay time in milliseconds

const timeoutId = setTimeout( () => alert('Here is a delated hello!'), delay);

