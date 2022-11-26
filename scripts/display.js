let frame = document.createElement("iframe");

function display(file) {
	win.innerHTML = "";

	frame.src = "../files/resume.pdf#toolbar=0";
	frame.frameBorder = 0;
	frame.id = "frame";

	win.appendChild(frame);
}