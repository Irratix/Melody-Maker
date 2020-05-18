//define piano structure
var piano = [1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1];
var loopLength = 64;
//define melody
var melody = [];
for (let i=0; i<loopLength; i++) {
	melody[i] = [];
	for (let j=0; j<piano.length; j++) {
		melody[i][j] = Math.floor(1.3*Math.random());
	}
}
//define canvas
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var scalar = 20;
var horizontalStretch = 1.3;
c.width = scalar * loopLength * horizontalStretch;
c.height = scalar * piano.length;

//start program loop
main();

//main loop
function main() {
	drawCanvas();
	window.requestAnimationFrame(main);
}