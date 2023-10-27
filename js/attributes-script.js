"use strict";
// Use setTimout to create these behaviors.

// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.

let newProfilePic = setTimeout(updateProfilePic, 2000);

function updateProfilePic() {
	document.getElementById("profile-pic").src = randomProfilePic();
}

function randomProfilePic() {
	return 'https://fer-uig.glitch.me?r=' + Math.random();
}


// Four seconds after the page loads, use innerHTML to change the name in "profile-name".

let newHTML  = setTimeout(updateProfileName, 4000);

function updateProfileName () {
	let profileName = document.getElementById('profile-name');
	profileName.innerHTML = "<h2>B. A. Baracus </h2>";
}

// Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

let newDesc = setTimeout(updateProfileDesc, 6000);

function updateProfileDesc () {
	let profileDesc = document.getElementById("profile-desc");
	profileDesc.style.color = "purple";
	profileDesc.style.fontFamily = "arial";
}

// Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.

function toggleBackground () {
	const profileCard = document.querySelector("#profile-card");
	profileCard.classList.toggle("background-toggle");
}

setInterval(toggleBackground, 2000);