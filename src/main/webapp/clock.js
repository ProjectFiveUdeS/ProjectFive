export class Clock{

    updateClock(){
        let currentTime = new Date ();
        let heure = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
        const debutExam = new Date(2020, 6, 11, 18, 30, 20); //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
        const finExam = new Date(2020, 6, 11, 19, 20, 0); //Idem
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
            $$("barre_temps_restant").setValue((currentTimeEnSec-debutExamEnSec)*100/(finExamEnSec-debutExamEnSec));
        $$("barre_temps_restant").refresh();

        let heure2 = finExam.getHours() - currentTime.getHours();
        let minutes2 = finExam.getMinutes() - currentTime.getMinutes();
        let secondes2 = finExam.getSeconds() - currentTime.getSeconds();

        if(minutes2 < 0)
            minutes2 += 59;
        if(secondes2 < 0)
            secondes2 += 60;

        heure2 = (heure2 < 10 ? "0" : "") + heure2;
        minutes2 = (minutes2 < 10 ? "0" : "") + minutes2;
        secondes2 = (secondes2 < 10 ? "0" : "") + secondes2;

        let stringHeure2 = heure2 + ":" + minutes2 + ":" + secondes2;

        $$("temps_restant").setValue(stringHeure2);
        $$("temps_restant").refresh();
    }
}
