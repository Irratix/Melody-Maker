//define piano structure
var piano = [1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1];
var loopLength = 64;
//define melody
var melody = [];
for (let i=0; i<loopLength; i++) {
	melody[i] = [];
	for (let j=0; j<piano.length; j++) {
		melody[i][j] = 0;
	}
}
//define canvas
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var scalar = 20;
var horizontalStretch = 1.3;
c.width = scalar * loopLength * horizontalStretch;
c.height = scalar * piano.length;
//more init
var input;
var input = document.createElement('input');
input.type = 'file';

//start program loop
main();

//main loop
function main() {
	drawCanvas();
	window.requestAnimationFrame(main);
}

// Function to download data to a file, copied from https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//load a melody
function loadMelody() {
	input.click();
}

input.onchange = e => { 
	var file = e.target.files[0]; 
	var reader = new FileReader();
	reader.readAsText(file,'UTF-8');
	reader.onload = readerEvent => {
		melody = JSON.parse(readerEvent.target.result); // this is the content!
	}
}