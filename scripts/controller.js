let mode = "dir"
let displayed = "README.txt";
let select = document.getElementsByClassName("selected");

document.getElementById("window").innerText = "";

pager("readme");

// There ~may~ be a better way to this
// But I don't know so it will be done like this :3
function updateDisplay() {
	const window = document.getElementById("window");
	
	switch(displayed) {
		case "README.txt":
			readme("readme");
			break;
		case "About":
			pager("about");
			break;
		default:
			break;
	}
}

function selectRow() {
	const path = document.getElementById("path");
	const pathString = path.innerText;

	// TODO: Find a better way to do this
	displayed = select.innerText.substring(0, select.innerText.indexOf("-"));

	console.log(displayed);

	path.innerText = pathString.substring(0, pathString.indexOf("/")+1) + displayed;

	updateDisplay();
}

function moveSelect(direction) {
	const rows = document.getElementsByClassName("row");

	// Can't find an easier to find the element index dumb stupid sad 3:
	let find;
	for(i = 0; i < rows.length; i++) {
		if(rows[i].classList.contains("selected")) {
			find = i
		}
	}

	if(direction == "up") {
		if(find > 0) {
			rows[find].classList.remove("selected");
			find--;

			rows[find].classList.add("selected");
			select = rows[find];
		}
	}else if(direction == "down") {
		if(find < rows.length - 1) {
			rows[find].classList.remove("selected");
			find++;

			rows[find].classList.add("selected");
			select = rows[find];
		}
	}

}

function swapMode() {
	const path = document.getElementById("path");

	if(mode == "dir") {
		mode = "dis";
		path.classList.add("selected")
	}else{
		mode = "dir";
		path.classList.remove("selected")
	}
}

function parseInput(key) {
	switch(key){
		case 40:
		case 74:
			if(mode == "dir") {
				moveSelect("down");
			}else{
				// TODO: Handle other input
			}
			
			break;
		case 38:
		case 75:
			if(mode == "dir") {
				moveSelect("up");
			}else{
				// TODO: Handle other input
			}
			
			break;
		case 39:
		case 76:
			if(mode != "dis") { swapMode(); }
			break;
		case 37: 
		case 72:
			if(mode != "dir") { swapMode(); }
			break;
		case 13:
			selectRow();
			break;
		default:
			break;
	}
}

// Ew gross get the key outta there D:
document.onkeydown = function(evt) {
    evt = evt || window.event;
    const charCode = evt.keyCode || evt.which;
    
    parseInput(charCode);
};