//mouse listeners
window.addEventListener("mousedown", function(e) {
	let mouseX = e.clientX - c.offsetLeft;
	let mouseY = e.clientY - c.offsetTop;
	if (mouseX < scalar) return;
	if (mouseY < 0) return;
	if (mouseX > c.width) return;
	if (mouseY > c.height) return;
	let gridX = Math.floor((mouseX - scalar)/((c.width-scalar)/loopLength));
	let gridY = Math.floor(piano.length - mouseY/(c.height/piano.length));
	melody[gridX][gridY] = 1 - melody[gridX][gridY];
}, false);


//buttons
function saveMelody() {
	let melodyJSON = JSON.stringify(melody);
	//hash function I copied from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
	hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
	download(melodyJSON, hashCode(melodyJSON), "application/json");
}