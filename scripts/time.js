const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const t = document.getElementById("time");

updateTime();

function updateTime() {
	const d = new Date();
	let date;
	let postfix;
	const month = d.getMonth();
	const day = d.getDate();
	const year = d.getFullYear();
	let hour = d.getHours();
	let minute = d.getMinutes().toString();

	if (hour < 12) {
		postfix = "am";
	} else {
		hour -= 12;
		postfix = "pm";
	}

	if (minute.length < 2) {
		minute = "0"+ minute;
	}

	date = m[month]+" "+day+" "+year+" @ "+hour+":"+minute+postfix;

	t.textContent = date;
}

setInterval(() => {
	updateTime();	
}, 1000);