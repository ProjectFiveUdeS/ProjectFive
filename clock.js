var currentTime = new Date ();
var heure = currentTime.getHours();
var min = currentTime.getMinutes();
var sec = currentTime.getSeconds();

min = (min < 10 ? "0" : "") + min;
sec = (sec < 10 ? "0" : "") + sec;

var AMPM = (heure < 12) ? "AM" : "PM";
heure = (heure > 12) ? heure - 12 : heure;
heure = (heure == 0) ? 12 : heure;

var stringHeure = heure + ":" + min + " " + AMPM;

document.getElementById("stringHeure").innerHTML = stringHeure;
