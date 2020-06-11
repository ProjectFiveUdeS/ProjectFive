new class Clock{
    static updateClock();

     updateClock = function(){
     let currentTime = new Date ();
     let heure = currentTime.getHours();
     let min = currentTime.getMinutes();
     let sec = currentTime.getSeconds();
     const debutExam = new Date(2020, 11, 15, 10, 15, 20); //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
     const finExam = new Date(2020, 11, 15, 12, 0, 0); //Idem
     const debutExamEnSec = 3600*debutExam.getHours() + 60*debutExam.getMinutes() + debutExam.getSeconds();
     const finExamEnSec = 3600*finExam.getHours() + 60*finExam.getMinutes() + finExam.getSeconds();
     const currentTimeEnSec = 3600*currentTime.getHours() + 60*currentTime.getMinutes() + currentTime.getSeconds();
     min = (min < 10 ? "0" : "") + min;
     sec = (sec < 10 ? "0" : "") + sec;

     let AMPM = (heure < 12) ? "AM" : "PM";
     heure = (heure > 12) ? heure - 12 : heure;
     heure = (heure == 0) ? 12 : heure;

     let stringHeure = heure + ":" + min + ":" + sec + " " + AMPM;
     $$("heure_actuelle").setValue(stringHeure);
     $$("heure_actuelle").refresh();

     if(currentTime <= finExam)
         $$("barre_temps_restant").setValue((currentTimeEnSec-debutExamEnSec)*60/(finExamEnSec-debutExamEnSec));
     $$("barre_temps_restant").refresh();

     let heure2 = finExam.getHours() - currentTime.getHours();
     let minutes2 = finExam.getMinutes() - currentTime.getMinutes();
     let secondes2 = finExam.getSeconds() - currentTime.getSeconds();
     minutes2 = (min < 10 ? "0" : "") + min;
     secondes2 = (sec < 10 ? "0" : "") + sec;

     let stringHeure2 = heure2 + ":" + minutes2 + ":" + secondes2;

     $$("temps_restant").setValue(stringHeure2);
     $$("temps_restant").refresh();
    }
}
export{Clock};