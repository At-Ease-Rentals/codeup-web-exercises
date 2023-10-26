"use strict";

const btnToClick = document.getElementById('btnToClick');
console.log(btnToClick);

const evenElements = document.getElementsByClassName('even');
console.log(evenElements[0]);

for (let i = 0; i < evenElements.length; i++) {
	console.log(evenElements[i]);
}

const listItems = document.getElementsByTagName('li');
console.log(listItems[0]);

for (let i = 0; i < listItems.length; i++) {
	console.log(listItems[i]);
}

document.querySelector('#container');

document.querySelectorAll('.navbar');

document.querySelector("section");

document.querySelector('.navbar a');

document.querySelectorAll('p');

document.querySelectorAll('.numbers').forEach(number =>console.log(number.innerHTML));

// [...document.getElementsByClassName('numbers')].forEach(number => console.log(number.innerHTML));
// [...document.getElementsByTagName('li')].forEach(listItem => console.log(listItem.number));

const usernameInput = document.forms.login.username;
console.log(usernameInput.value);


