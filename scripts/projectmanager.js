const projects = [
	"breezy23.github.io"
];

function createProjects() {
	const div = document.createElement("div");
	div.classList.add("dir");
	div.id = "directory"

	for(j = 0; j < 25; j++) {
		const row = document.createElement("div");
		const item = document.createElement("span");
		const ident = document.createElement("span");

		row.classList.add("row");
		item.classList.add("item");
		ident.classList.add("ident");

		row.id = j;
		if(j == 0){
			item.textContent = "..";
			ident.textContent = "-FOLDER-"
			row.classList.add("selected")

			row.append(item);
			row.append(ident);
			div.append(row);
		}else{

			if(j-1 < projects.length) {
				item.textContent = projects[j-1];
				ident.textContent = "--FILE->";

				row.append(item);
				row.append(ident);
				div.append(row);
			}else{
				ident.textContent = "        ";
				div.append(ident);
			}
		}
	}

	return div;
}

