const github = "https://github.com/breezy23";
const linkedin = "https://www.linkedin.com/in/ezbz/";
const email = "br0323@gmail.com"

function redirect(url) {
	win.innerHTML = "";
	
	const para = document.createElement("p");
	const text = document.createTextNode("Redirecting...");
	let u;

	para.appendChild(text);
	win.appendChild(para);

	switch(url) {
		case "github":
			u = github;
			break;
		case "linkedin":
			u = linkedin;;
			break;
		case "email":
			u = email;
			break;
		default:
			break;
	}

	window.open(u, '_blank');
}