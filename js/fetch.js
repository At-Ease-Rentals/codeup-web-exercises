"use strict";

fetch("https://api.github.com/users", {headers:{'Authorization':"GITHUB_API"}})
.then(function(response) {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
})
.then(function(json) {
    console.log(json);
})
.catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});

fetch("https://api.github.com/users", {headers:{'Authorization':"GITHUB_API"}})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});


fetch('data/inventory.json')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error('Error:', error));



let table = document.getElementById('myTable'); // replace with your table id

fetch('data/inventory.json')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.textContent = item.name; // replace with your data key
        cell2.textContent = item.price; // replace with your data key
    });
})
.catch(error => console.error('Error:', error));

