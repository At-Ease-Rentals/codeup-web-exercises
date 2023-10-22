"use strict";

const arr = [3, 5, 7];

function randomNumber(min, max) {
	return	Math.floor(Math.random() * (max - min + 1) + min);
}

const newArr = [...arr,  randomNumber(23, 42)];

console.log(newArr);

const shapes = ['square', 'rectangle', 'circle', 'triangle'];
shapes.forEach(shape => console.log(`Here is a lovely shape: ${shape}.`));

const someNums = [12, 41];

function multiply(num1, num2){
	return num1 * num2;
}

console.log(multiply(...someNums));

function add(...args) {
	let total = 0;
	for (let i = 0; i <  arr.length; i++) {
		total += arr[i];
	}
	return total;
}

const randNumArr1 = [55, 1, 58, 66, 65, 92, 6, 87, 71, 48, 36, 96];
console.log(add(...randNumArr1));

const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
console.log(add(...randNumArr2));
