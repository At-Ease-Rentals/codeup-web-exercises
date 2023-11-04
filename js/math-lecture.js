'use strict';

//Math works with the Number type. It doesn't work with BigInt.
// All properties and methods of Math are static.
// Math objects that are commonly used
    //Math.E - Euler's number and the base of natural logarithms; approximately 2.718.
    //Math.PI - Ratio of a circle's circumference to its diameter; approximately 3.14159.

//Math.PI -  Ratio of a circle's circumference to its diameter; approximately 3.14159
console.log(Math.PI);

// Math.random returns a pseudo-random number between 0 and 1 but does
// not include 1.
function getRandomInt() {
    return Math.random();
}
console.log(getRandomInt());

// We can scale to get a desired range between min and max range
 function randomInt(min, max) {
    return Math.floor(Math.random() *(max - min +1) + min);
}
console.log(randomInt);

///Math.round(x) returns the values of a number rounded to the nearest integer.
console.log(Math.round(20.49));  // 20
console.log(Math.round(20.5));   // 21
console.log(Math.round(-20.5));  // -20
console.log(Math.round(-20.51)); //-21

//Math.floor() returns the largest integer less than or equal to x
console.log(Math.floor(32.123445)); //32
console.log(Math.floor(32.985)); //32
console.log(Math.floor(-32.023445)); //-33
console.log(Math.floor(-32.923445)); //-33

//Math.ceil() returns the smallest integer greater than or equal to x.
console.log(Math.ceil(12.123445)); //13
console.log(Math.ceil(12.785)); //13
console.log(Math.ceil(-12.023445)); //-12
console.log(Math.ceil(-12.923445)); //-12

//Math.pow() returns  base x to the exponent power y (that is, xy).
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(1, 3)); // 1
console.log(Math.pow(4,  3));//64

//Math.sqrt() returns the positive square root of x
console.log(Math.sqrt(4));//2
console.log(Math.sqrt(16));//4
console.log(Math.sqrt(25));//5
console.log(Math.sqrt(-4));//NaN
