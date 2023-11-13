"use strict"


// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// let languagesWith3 = users.filter(function(user){return user.languages.length >= 3;
// });
// console.log(languagesWith3);

//trying with an arrow function
let languagesWith3 = users.filter( user => user.languages.length >= 3);
console.log(languagesWith3);

// Use .map to create an array of strings where each element is a user's email address
let userEmailAddress = users.map(user =>user.email);
console.log(userEmailAddress);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let usersTotalYearsOfExperience = users.reduce((accumulator,value) => accumulator + value.yearsOfExperience,0);
console.log(usersTotalYearsOfExperience);

// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((accumulator, email) => {});

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructorNames = users.reduce((name) => users.name);
console.log(`Your instructors are: ${instructorNames}`);
