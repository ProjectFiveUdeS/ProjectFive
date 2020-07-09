import {examenText} from "./textExamen.js";

export class Clock{

    async updateClock(){
        let currentTime = new Date ();
        let heure = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
        let exam = await examenText.selectExamen($$("textExamen").getValue());
        let debut = exam[0].debut;
        let fin = exam[0].fin;
        const debutExam = new Date(); //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
        const finExam = new Date(); //Idem
        debutExam.setHours(debut.split(':')[0], debut.split(':')[1], debut.split(':')[2]);
        finExam.setHours(fin.split(':')[0], fin.split(':')[1], fin.split(':')[2]);
        console.log(debutExam);
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
            $$("bulletTempsRestant").setValue((currentTimeEnSec-debutExamEnSec)*100/(finExamEnSec-debutExamEnSec));
        $$("bulletTempsRestant").refresh();

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

        if(currentTimeEnSec <= finExamEnSec)
            $$("labelTempsRestant").setValue(stringHeure2);
        $$("labelTempsRestant").refresh();
    }

    setLabel(label){
        $$("heure_actuelle").setValue(label);
        $$("heure_actuelle").refresh();
    }
}