"use strict";

document.querySelector('.btnLi').addEventListener('click', function () {
    document.querySelectorAll('#national-parks-list li ul li:last-child').forEach(function (li) {
        li.style.backgroundColor = 'yellow';
    });
});

document.querySelectorAll('#national-parks-list h3').forEach(function (h3) {
    h3.addEventListener('click', function () {
        this.nextElementSibling.querySelectorAll('li').forEach(function (li) {
            li.style.fontWeight = 'bold';
        });
    });
});

document.querySelectorAll('#national-parks-list li li').forEach(function (li) {
    li.addEventListener('click', function () {
        this.parentElement.querySelector('li').style.color = 'blue';
    });
});