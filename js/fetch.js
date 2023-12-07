"use strict";
import {GITHUB_API} from "./keys.js"; // Assuming keys.js is in the same directory

// Replace 'USERNAME' with the GitHub username you want to retrieve data for
const username = 'USERNAME';

fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API}`}})
.then(function(response) {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
})
.then(function(events) {
    // Find the last commit event and get its timestamp
    const lastCommitEvent = events.find(event => event.type === "PushEvent");
    const lastCommitDate = lastCommitEvent ? new Date(lastCommitEvent.created_at) : null;
    console.log("Last commit date:", lastCommitDate);
})
.catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});
