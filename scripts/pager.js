const readme = [
	"Hello! This is a website that I decided to make because I was bored! :D",
	"I decided to make this website to explore the basics of web design, and keep me sane by doing something while I sit in my room instead of doing homework.",
	"To navigate around this website, use the up/down arrow keys to navigate, use right/left arrow keys to change which panel you are interacting with, and use enter to enter your selection.",
	"Alternatively, you could use the k/j and l/h keys respectively to navigate around.",
	"Note: there is something kinda wrong with scrolling a page, so just use a mouse :)"
];
const about = [
	"I am Brandon Zaragoza, a Sophomore at Iowa State currently studing computer science, and recently declared a cyber security minor!",
	"I began programming in highschool, with classes provided by my highschool. With the help of a very enthusiastic and helpful teacher, I quickly finished all the provided classes and even his new class covering data structures by my Junior year of highschool and managed to win an award by graduation.",
	"Throughout highschool, I also began making some plugins for me and my friends to play, using the Spigot API. I also began playing with the Source Engine, making some maps for me and my friends to play around on",
	"Since then, I've been working on developing my interests more and got into lockpicking and cyber security. I also began making much smaller scripts to automate small tasks.",
	"Currently I hope to explore and expand two of my main interests: Virtual Reality and Cyber Security",
	"To me, I see Virtual Reality as a new and emerging technology that has limitless potential in many fields beyond entertainment. I want to help push this technology to its fullest potential",
	"To me, Cyber Security is a field that fascinates me. It is a field that is constantly growing and changing, and the many processes involved are interesting and fun to me. I've learned so much about different types of technology while learning more about Cyber Security and want to learn much more."
];
const contact = [
	"Email: brz0323@gmail.com | brz23@iastate.edu",
	"Bro I gotta have more contact somewhere around here"
];
const website = [
	"You're lookin\' at it yo! :D"
];

function pager(message) {
	let msg;

	// Remove all children nodes
	win.innerHTML = "";

	switch(message) {
		case "readme":
			msg = readme;
			break;
		case "about":
			msg = about;
			break;
		case "contact":
			msg = contact;
			break;
		case "website":
			msg = website;
			break;
		default:
			break;
	}

	for(i = 0; i < msg.length; i++) {
		const para = document.createElement("p");
		const text = document.createTextNode(msg[i]);

		para.appendChild(text);
		win.appendChild(para);
	}
}