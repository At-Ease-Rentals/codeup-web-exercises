"use strict";
fetch('https://reqres.in/api/users/')
.then(res => res.json())
.then(data => console.log(data))

//fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(response => console.log(response));

//fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(function(response){
////    alert("fetch call completed successfully!");
//    console.log("Response status:" + response.status);
//    console.log(response.body);
//    console.log(response.ok);
//    const data =  response.json();
//    console.log(data);
//});
//
//fetch("https://pokeapi.co/api/v2/pokemon/charmander").then(function (response) {
//    return response.json();
//})
//.then( function (data) {
//    console.log(data);
//});



//const myPromise = fetch('https://api.github.com/users');
//myPromise.then(response => console.log(response));
//console.log("See its async!");
//myPromise.catch(error => console.error(error));
//
//const githubPromise = fetch('https://api.github.com/repositories');
//const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//Promise.all([githubPromise, bitbucketPromise]).then( data => {
//})
//    .catch( error => {
//});
//
//fetch("https://api.github.com/users").then(response => response.json()).then(users => {
//    users.forEach( user => {
//    console.log(users.login);
//})
//})
//.catch(error => console.error(error));


//const url = "http://worldtimeapi.org/api/timezone/America/New_York";
//const url = "https://api.thenewsapi.com/v1/news/top?api_token=m4LFWJybesygroQ4vhYq4EoQp5K2ry4pPDLf9T6o";
//
//
//async function getData() {
//    const request = new Request((url, {
//        headers: {
//            'Authorization': ''
//        }
//    }))
//    const response = await fetch(request);
//    const data = await response.json();
//    console.log(data);
//}
