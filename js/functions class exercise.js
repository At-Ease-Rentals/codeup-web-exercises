"use strict";

function increment (x) {
    return x + 1;
}

let four = increment(3);
console.log(four);

let six = increment(increment(increment(3)));
console.log(six);

function add(four, six){
    let sum = four + six;
    return sum
}

console.log(add(four, six));

