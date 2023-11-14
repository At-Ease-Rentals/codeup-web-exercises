"use strict"

fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(response => {
    return response.json();
})
.then( data => {
    console.log(data);
});

const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
console.log("See its async!");
myPromise.catch(error => console.error(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
Promise.all([githubPromise, bitbucketPromise]).then( data => {
})
    .catch( error => {
});

fetch("https://api.github.com/users").then(response => response.json()).then(users => {
    users.forEach( user => {
    console.log(users.login);
})
})
.catch(error => console.error(error));