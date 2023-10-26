"use strict";

//Import other function list
import * as numbers from "./number-utils.js";

// Dice function for 6 sides
export function rollD6(){
	return numbers.randomNumber(1, 6);
}

// Dice function for 20 sides
export function rollD20(){
	return numbers.randomNumber(1, 20);
}