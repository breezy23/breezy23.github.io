const lines = [
	'Disk check: OK.',
	'Memory check: OK.',
	'Hardware check: OK.',
	'Checking drivers...',
	'Driver version: V023',
	'Driver name: MELON',
	'Found!',
	'Driver version: V004',
	'Driver name: FiNN',
	'Found!',
	'All drivers found!',
	'Network check: OK.',
	'Running bzOS...'
];

let cursor = true;
const speed = 750;
let script = true;
let cont = false;

const bzStr = [
"88                             ,ad8888ba,     ad88888ba",
"88                            d8\"\'    \'\"8b   d8\"     \"8b",
"88                           d8\'        \'8b  Y8,",
"8b,dPPYba,   d888888888888b  88          88  \'Y8aaaaa,",
"88P\'    \"8a          d888P   88          88    \'\"\"\"\"\"8b,",
"88       d8      d888P       Y8,        ,8P          \'8b",
"88b,   ,a8\"   d888P           Y8a.    .a8P   Y8a     a8P",
"8P\'YbbdP\"\'   d888888888888b    \'\"Y8888Y\"\'     \"Y88888P\" ",
];

bootLines()

function toHome(){
	if(cont){
		document.location.href = "pages/home.html";
	}
}

async function bzOS(){
	// TODO: Put text in new div
	const splash = document.createElement("div");
	const splashContainer = document.createElement("div");
	const body = document.getElementById("body");
	document.getElementById("textContainer").remove();

	splashContainer.classList.add("splashContainer");

	splash.classList.add("splash");
	for(let i = 0; i < 8; i++){
		const p = document.createTextNode("p");
		const br = document.createElement("br");
		p.textContent = bzStr[i];

		splashContainer.appendChild(p);
		splashContainer.appendChild(br);
	}

	splashContainer.style.top = window.innerHeight+"px";
	splashContainer.style.textAlign = "left";
	splash.appendChild(splashContainer);
	body.appendChild(splash);

	let height = window.innerHeight;
	while(height > 200){
		height -= 24;
		splashContainer.style.top = height+"px";

		await sleep(125);
	}

	await sleep(2000);

	const p = document.createElement("div");
	const br = document.createElement("br");
	p.textContent = "---Press any key to continue---";
	p.classList.add("splashContainer");

	splashContainer.appendChild(br);
	splashContainer.appendChild(p);

	cont = true;
}

async function bootLines(){
	await sleep(4000);

	const box = document.getElementById("textContainer");
	for(let i = 0; i < lines.length; i++){
		const crs = document.getElementById("cursor");
		const line = document.createElement("div");

		// Add break points to make it look nice uwu
		if(i == 0 || i == 12){
			const br = document.createElement("br");
			box.appendChild(br);
		}

		line.classList.add("loading-text");
		line.textContent = "";
		
		box.appendChild(line);

		//  Make it looked like it's being typed! :D
		script = false;
		crs.style.opacity = 1;
		for(let j = 0; j <= lines[i].length; j++){
			line.textContent = lines[i].substring(0, j);
			line.appendChild(crs);
			await sleep(15);
		}
		script = true;

		switch(i){
			case 0:
				// 'Disk check: OK.'
				await sleep(250);
				break;
			case 1:
				// 'Memory check: OK.'
				await sleep(250);
				break;
			case 2:
				// 'Hardware check: OK.'
				await sleep(250);
				break;
			case 3:
				// 'Checking drivers...'
				await sleep(250);
				break;
			case 4:
				// 'Driver version: V023'
				break;
			case 5:
				// 'Driver name: MELON'
				await sleep(500);
				break;
			case 6:
				// 'Found!'
				await sleep(250);
				break;
			case 7:
				// 'Driver version: V004'
				break;
			case 8:
				// 'Driver name: FiNN'
				await sleep(500);
				break;
			case 9:
				// 'Found!'
				await sleep(250);
				break;
			case 10:
				// 'All drivers found!'
				await sleep(250);
				break;
			case 11:
				// 'Network check: OK.'
				await sleep(125);
				break;
			case 12:
				// 'Running bzOS...'
				await sleep(3000);
				break;
		}
	}
	script = false;
	bzOS()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Cursor blinking!! :D
setInterval(() => {
  const crs = document.getElementById('cursor');
  	if(script){
	    if(cursor) {
	      crs.style.opacity = 0;
	      cursor = false;
	    }else {
	      crs.style.opacity = 1;
	      cursor = true;
	    }
	}
}, speed);