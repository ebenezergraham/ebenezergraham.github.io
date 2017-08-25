// Copyright (c) 2017 Pactmart Codes. All rights reserved.
window.onload = function(){
var duration = 30000;
var timeUp = false;
var display = document.getElementById('clock-countdown');
startTimer(duration, display,timeUp);
}

function startTimer(duration, display, timeUp) {
    var counter = duration,days, hours, min, sec;
    setInterval(function () {
	 days = parseInt(0, 10);
	    hours = parseInt(counter % 3600, 10);
	    min = parseInt(hours*60 % 60, 10);
	sec = parseInt(counter % 60, 10);
	
	
       
	    
	days = days < 10 ? '0' + days : days;    
	hours = hours < 10 ? '0' + hours : hours;
        min = min < 10 ? '0' + min : min;
	sec = sec < 10 ? '0' + sec : sec;
        if (days == 00 && hours == 00 && min == 00 && sec == 00) {
            timeUp = true;
            if (timeUp) {
		display.innerHTML = "Hi there :;";
            }
            	display.innerHTML = days + ":" + hours + min + ":" + sec;

        }
        if (!timeUp) {
            display.innerHTML = days + " : " + hours+ " : " + min + " : " + sec;
            document.getElementById('clock-countdown').value = counter;
        }
		
        if (--counter < 0) {
            counter = duration;
        }

    }, 1000);
}
