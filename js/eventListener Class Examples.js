"use strict";

const button1 = document.getElementById("btn1");
const listener = (event) => {
	console.log('You clicked the button!.');
	console.log(event.target);
	console.log(event.target.innerText);
}
// alert('You clicked the button!');
button1.addEventListener('click', listener);

const button2 = document.getElementById('btn2');

const remover = () => {
	button1.removeEventListener('click', listener);
	alert('Event listener removed.');
}
button2.addEventListener('click', remover);