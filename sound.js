var channel_max = 50;
audiochannels = new Array();
for (a=0; a < channel_max; a++) {
	audiochannels[a] = new Array();
	audiochannels[a]['channel'] = new Audio();
	audiochannels[a]['finished'] = -1;
}

function playMultiSound(s) {
	for (let a = 0; a < audiochannels.length; a++) {
		thistime = new Date();
		if (audiochannels[a]['finished'] < thistime.getTime()) {
			audiochannels[a]['finished'] = thistime.getTime() + 1000;
			audiochannels[a]['channel'].src = s + ".wav";
			audiochannels[a]['channel'].volume = 1;
			audiochannels[a]['channel'].load();
			audiochannels[a]['channel'].play();
			break;
		}
	}
}