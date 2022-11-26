let win = document.getElementById("window")

win.innerText = "";

function readme() {
	let paragraph = document.createElement("p");
	let text = document.createTextNode("Test1");
	paragraph.appendChild(text);
	text = document.createTextNode("Test2");
	paragraph.appendChild(text);
	win.appendChild(paragraph);
}