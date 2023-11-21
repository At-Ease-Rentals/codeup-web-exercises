"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const toDoForm = document.getElementById('to-do-form');
    const toDoList = document.getElementById('to-do-list');

    toDoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userInput = document.getElementById('to-do');
        const toDoText = userInput.value.trim();

        if (toDoText !== '') {
            createToDoItem(toDoText);
            userInput.value = '';
        }
    });

    toDoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-danger')) {
            event.target.closest('.to-do-item').remove();
        }
    });

    function createToDoItem(text) {
        const listItem = document.createElement('li');
        listItem.className = 'to-do-item list-group-item d-flex justify-content-between align-items-center';

        const paragraph = document.createElement('p');
        paragraph.className = 'm-0';
        paragraph.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.textContent = 'Done';

        listItem.appendChild(paragraph);
        listItem.appendChild(deleteButton);

        toDoList.appendChild(listItem);
    }
});
