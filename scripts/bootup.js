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

bootLines()

function bzOS(){
	document.getElementById("textContainer").remove();
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
				await sleep(1000);
				break;
			case 1:
				// 'Memory check: OK.'
				await sleep(1000);
				break;
			case 2:
				// 'Hardware check: OK.'
				await sleep(1000);
				break;
			case 3:
				// 'Checking drivers...'
				await sleep(1000);
				break;
			case 4:
				// 'Driver version: V023'
				break;
			case 5:
				// 'Driver name: MELON'
				await sleep(4000);
				break;
			case 6:
				// 'Found!'
				await sleep(1000);
				break;
			case 7:
				// 'Driver version: V004'
				break;
			case 8:
				// 'Driver name: FiNN'
				await sleep(4000);
				break;
			case 9:
				// 'Found!'
				await sleep(1000);
				break;
			case 10:
				// 'All drivers found!'
				await sleep(1000);
				break;
			case 11:
				// 'Network check: OK.'
				await sleep(500);
				break;
			case 12:
				// 'Running bzOS...'
				await sleep(7000);
				break;
		}
	}
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