// Copyright (c) 2017 Pactmart Codes. All rights reserved.
window.onload = function(){
var duration = 300;
var timeUp = false;
var display = document.getElementById('clock-countdown');
startTimer(duration, display,timeUp);
}

function startTimer(duration, display, timeUp) {
    var counter = duration,days, hours, min, sec;
    setInterval(function () {
	days = parseInt(counter / 60, 10);
	hours = parseInt(counter / 60, 10);
        min = parseInt(counter / 60, 10);
        sec = parseInt(counter % 60, 10);
	days = days < 10 ? '0' + days : days;    
	hours = hours < 10 ? '0' + hours : hours;
        min = min < 10 ? '0' + min : min;
	sec = sec < 10 ? '0' + sec : sec;
        if (min === 0 && sec == 00) {
            timeUp = true;
            if (timeUp) {
		display.innerHTML="Time is up";
            }
            	display.innerHTML = days + ":" + hours + min + ":" + sec;

        }
        if (!timeUp) {
            display.innerHTML = days + ":" + hours + min + ":" + sec;
            document.getElementById('timer').value = counter;
        }
		
        if (--counter < 0) {
            counter = duration;
        }

    }, 1000);
}
