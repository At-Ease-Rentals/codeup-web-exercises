"use strict";

const arr = [3, 5, 7];

function randomNumber(min, max) {
	return	Math.floor(Math.random() * (max - min + 1) + min);
}

const newArr = [...arr,  randomNumber(23, 42)];

console.log(newArr);