export class Clock{

    async updateClock(){
        let currentTime = new Date ();
        let heure = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
        let surveillantId = $$("textSelectionSurveillant").getValue();
        let ajd = currentTime.toLocaleDateString();
        let annee = ajd.split('/')[2];
        let mois = ajd.split('/')[0];
        let jour = ajd.split('/')[1];
        jour = (jour < 10 ? "0" : "") + jour;
        mois = (mois < 10 ? "0" : "") + mois;
        let ajd2 = annee + "-" + mois + "-" + jour;
        let surveille1 = await this.selectSurveille(surveillantId, ajd2);
        let surveille2 = surveille1[0];
        let exam = await this.selectExamen(surveille2.idCoursExamen, surveille1.dateExamen);
        let exam1 = exam[0];
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;
        let AMPM = (heure < 12) ? "AM" : "PM";
        heure = (heure > 12) ? heure - 12 : heure;
        heure = (heure == 0) ? 12 : heure;
        let stringHeure = "Heure actuelle : " + heure + ":" + min + ":" + sec + " " + AMPM;
        $$("heure_actuelle").setValue(stringHeure);
        $$("heure_actuelle").refresh();

        let debut = exam1.debut;
        let fin = exam1.fin;
        const debutExam = new Date(); //Valeur convertie en secondes, on récupérera cette valeur dans la DB.
        const finExam = new Date(); //Idem
        debutExam.setHours(debut.split(':')[0], debut.split(':')[1], debut.split(':')[2]);
        finExam.setHours(fin.split(':')[0], fin.split(':')[1], fin.split(':')[2]);
        const debutExamEnSec = 3600*debutExam.getHours() + 60*debutExam.getMinutes() + debutExam.getSeconds();
        const finExamEnSec = 3600*finExam.getHours() + 60*finExam.getMinutes() + finExam.getSeconds();
        const currentTimeEnSec = 3600*currentTime.getHours() + 60*currentTime.getMinutes() + currentTime.getSeconds();

        if(currentTime <= finExam && currentTime >= debutExam){
            $$("slider").setValue((currentTimeEnSec-debutExamEnSec)*100/(finExamEnSec-debutExamEnSec));
            $$("slider").refresh();
        }

        let heure2 = finExam.getHours() - currentTime.getHours();

        let minutes2 = finExam.getMinutes() - currentTime.getMinutes();;

        let secondes2 = finExam.getSeconds() - currentTime.getSeconds();

        if(minutes2 < 0){
            minutes2 += 60;
            heure2 = heure2-1;
        }
        if(secondes2 < 0){
            secondes2 += 60;
            minutes2 = minutes2-1;
        }

        heure2 = (heure2 < 10 ? "0" : "") + heure2;
        minutes2 = (minutes2 < 10 ? "0" : "") + minutes2;
        secondes2 = (secondes2 < 10 ? "0" : "") + secondes2;

        let stringHeure2 = "Temps restant : " + heure2 + ":" + minutes2 + ":" + secondes2;

        if(currentTimeEnSec <= finExamEnSec)
            $$("labelTempsRestant").setValue(stringHeure2);
        else
            $$("labelTempsRestant").setValue("Temps restant : N/A");
        $$("labelTempsRestant").refresh();

        if(currentTimeEnSec <= debutExamEnSec)
            $$("slider").config.label = (debut.debut);
    }

    setLabel(label){
        $$("heure_actuelle").setValue(label);
        $$("heure_actuelle").refresh();
    }

    async selectSurveillant(prenom, nom){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/surveillantSelectId", nom, prenom)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectSurveille(idSurveillant, dateExamen){
        const envoi = {
            idSurveillant: idSurveillant,
            dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/surveille", envoi)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectExamen(idCoursExamen, dateExamen) {
        let idCours = {
            idCoursExamen: idCoursExamen,
            dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/examen", idCours)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }
}