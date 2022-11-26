let mode = "dir"
let displayed = "README.txt";
let select = document.getElementsByClassName("selected");

win.innerText = "";

pager("readme");

// TODO: Fix this eventually
function scrollSomething() {
	const displayDistance = 100;
	let scroller;

	if(displayed) {
		scroller = win;
	}else{
		scroller = document.getElementById("frame");
	}
}

// There ~may~ be a better way to this
// But I don't know so it will be done like this :3
function updateDisplay() {
	// Dumb ass pdf window had me stuck for hours 3:
	if(displayed == "Resume") {
		win.style.height = "100%";
	}else{
		win.style.height = "auto";
	}

	switch(displayed) {
		case "README.txt":
			pager("readme");
			break;
		case "About":
			pager("about");
			break;
		case "Resume":
			display("resume")
			break;
		case "GitHub":
			redirect("github");
			break;
		case "LinkedIn":
			redirect("linkedin");
			break;
		case "Contact":
			pager("contact");
		default:
			break;
	}
}

function selectRow() {
	const path = document.getElementById("path");
	const pathString = path.innerText;

	// TODO: Find a better way to do this
	displayed = select.innerText.substring(0, select.innerText.indexOf("-")).trim();

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

function clickSelect(row) {
	const rows = document.getElementsByClassName("row");

	// Can't find an easier to find the element index dumb stupid sad 3:
	let find;
	for(i = 0; i < rows.length; i++) {
		if(rows[i].classList.contains("selected")) {
			find = i
		}
	}

	rows[find].classList.remove("selected");
	row.classList.add("selected");

	select = row;

	// TODO: Find a better way to do this
	displayed = select.innerText.substring(0, select.innerText.indexOf("-")).trim();

	updateDisplay();
}

function parseInput(key) {
	switch(key){
		case 40:
		case 74:
			if(mode == "dir") {
				moveSelect("down");
			}else{
				console.log("scroll");
				scrollSomething();
			}
			
			break;
		case 38:
		case 75:
			if(mode == "dir") {
				moveSelect("up");
			}else{
				console.log("scroll");
				scrollSomething();
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