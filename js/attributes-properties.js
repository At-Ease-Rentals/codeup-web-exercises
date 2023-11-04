"use strict";

// const header = document.querySelector("header");
// console.log(header.innerHTML);
// header.innerHTML = "<h1>The uses of InnerHTML!</h1>" + "<p>You can get and" +
// 	" set HTML with innerHTML</p>";

// const header = document.querySelector('header');
// console.log(header.innerHTML);
// header.innerHTML = "<h1>The uses of InnerHTML!</h1>" + "<p>You can get and" +
// 	" set HTML with innerHTML</p>";
// console.log(header.innerText);

// const header=document.querySelector('header');
// console.log(header.innerHTML);
// header.innerHTML = "<h1>The uses of InnerHTML</h1>" + "<p>You can get and" +
// 	" set HTML with innerHTML</p>";
// console.log(header.innerText);
// 	document.querySelector('H1').innerText = "I control the inner text";
//
// document.querySelector("header");
// console.log(header.hasAttribute("id"));

// const header = document.querySelector("header");
// console.log(header.hasAttribute("id"));
// header.setAttribute("id", "pageHeader");
// console.log(header.hasAttribute("id"));
// console.log(header.getAttribute("id"));

const header = document.querySelector("header");
console.log(header.classList);
header.classList.add("background-color");
header.classList.remove("sans-serif");
header.classList.toggle("background-color");

let text = document.getElementById('text');
text.style.color = 'green';