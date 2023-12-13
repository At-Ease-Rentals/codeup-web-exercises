"use strict";

// Import GITHUB_API from keys.js (ensure correct path)
import { GITHUB_API } from "./keys.js";

const username = 'At-Ease-Rentals';

function getLastCommitDate(username) {
    return new Promise((resolve, reject) => {
        const url = `https://api.github.com/users/${username}/events`;

        fetch(url, {
            headers: {
                // Provide the correct header key and value from the imported GITHUB_API
                "Authorization": `Bearer ${GITHUB_API}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(events => {
            const commitEvent = events.find(event => event.type === 'PushEvent');
            if (commitEvent) {
                const lastCommitDate = new Date(commitEvent.created_at);
                resolve(lastCommitDate);
            } else {
                reject(new Error('No commit events found for this user.'));
            }
        })
        .catch(error => {
            reject(new Error(`Error fetching last commit date: ${error.message}`));
        });
    });
}

getLastCommitDate(username)
.then(lastCommitDate => {
    console.log('Last commit date:', lastCommitDate);
})
.catch(error => {
    console.error('Error:', error.message);
});
