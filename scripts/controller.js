// 0=up 1=down
function moveSelect(direction) {
	const rows = document.getElementsByClassName("row");
	const select = document.getElementsByClassName("selected");

	console.log(rows);
	console.log(select);

	// Can't find an easier to find the element index dumb stupid sad 3:
	let find;
	for(i = 0; i < rows.length; i++) {
		if(rows[i].classList.contains("selected")) {
			find = i
		}
	}

	if(direction == 0) {
		if(find > 0) {
			rows[find].classList.remove("selected");
			find--;

			rows[find].classList.add("selected");
		}
	}else if(direction == 1) {
		if(find < rows.length - 1) {
			rows[find].classList.remove("selected");
			find++;

			rows[find].classList.add("selected");
		}
	}

}

function parseInput(key) {
	switch(key){
		case 40:
		case 74:
			moveSelect(1);
			break;
		case 38:
		case 75:
			moveSelect(0);
		default:
			break;
	}
}

// Ew gross get the key outta there D:
document.onkeydown = function(evt) {
    evt = evt || window.event;
    const charCode = evt.keyCode || evt.which;
    
    console.log(charCode);
    parseInput(charCode);
};