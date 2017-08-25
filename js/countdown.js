// Copyright (c) 2017 Pactmart Codes. All rights reserved.
window.onload = function(){
var duration = 300;
var timeUp = false;
var display = document.getElementById('timer');
startTimer(duration, display,timeUp);
}
// assignValue(){
// var min = document.getElementById('min').value;
// var sec = document.getElementById('sec').value;
// var duration = (min*60)+sec;
// var timeUp = false;
// var display = document.getElementById('timer');
// startTimer(duration, display,timeUp);
// }

function startTimer(duration, display, timeUp) {
    var counter = duration,min, sec;
    setInterval(function () {
        min = parseInt(counter / 60, 10);
        sec = parseInt(counter % 60, 10);
        sec = sec < 10 ? '0' + sec : sec;
        if (min === 0 && sec == 00) {
            timeUp = true;
            if (timeUp) {
				display.innerHTML="Time is up";
            }
            display.innerHTML = min + ":" + sec;

        }
        if (!timeUp) {
            display.innerHTML = min + ":" + sec;
            document.getElementById('timer').value = counter;
        }
		
        if (--counter < 0) {
            counter = duration;
        }

    }, 1000);
}
