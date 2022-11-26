let win = document.getElementById("window");
const msg = [
"Hello! This is a website that I decided to make because I was bored! :D",
"I decided to make this website to explore the basics of web design, and keep me sane by doing something while I sit in my room instead of doing homework.",
"To navigate around this website, use the up/down arrow keys to navigate, use right/left arrow keys to change which panel you are interacting with, and use enter to enter your selection.",
"Alternatively, you could use the k/j and l/h keys respectively to navigate around"
];

win.innerText = "";

function readme() {
	for(i = 0; i < msg.length; i++) {
		let par = document.createElement("p");

		par.textContent = msg[i];

		win.appendChild(par);
	}
}