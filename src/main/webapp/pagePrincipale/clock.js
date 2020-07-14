export class Clock{

    async updateClock(){
        let currentTime = new Date ();
        let heure = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;
        heure = (heure < 10 ? "0" : "") + heure;
        let stringHeure = "Heure actuelle : " + heure + ":" + min + ":" + sec;
        $$("heure_actuelle").setValue(stringHeure);
        $$("heure_actuelle").refresh();

        let debut1 = $$("heure_debut").config.label;
        let debut = debut1.split(' ')[3];
        let fin1 = $$("heure_fin").config.label;
        let fin = fin1.split(' ')[3];
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

        if(secondes2 < 0){
            secondes2 += 60;
            minutes2 = minutes2-1;
        }
        if(minutes2 < 0){
            minutes2 += 60;
            heure2 = heure2-1;
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

        //update sorties

        let examen = $$("examen_actuel").config.label;
        let examenExtrait = examen.split(" ")[2];

        let ajd = new Date().toLocaleDateString();
        let annee = ajd.split('/')[2];
        let mois = ajd.split('/')[0];
        let jour = ajd.split('/')[1];
        jour = (jour < 10 ? "0" : "") + jour;
        mois = (mois < 10 ? "0" : "") + mois;
        let ajd2 = annee + "-" + mois + "-" + jour;

        if(examenExtrait != "N/A")
        {
            // sortie fin
            const tempsTierExamenEnSec = debutExamEnSec + ((finExamEnSec-debutExamEnSec)*1/3);
            if(currentTimeEnSec >= tempsTierExamenEnSec)
            {
                $$("sortieFinLabelClass").config.label =
                    'Sortie fin : <svg\n' +
                    '  width="50"\n' +
                    '  height="50"\n' +
                    '  viewBox="0 0 24 24"\n' +
                    '  fill="none"\n' +
                    '  xmlns="http://www.w3.org/2000/svg"\n' +
                    '  >\n' +
                    '  <path\n' +
                    '    d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"\n' +
                    '    fill="green"\n' +
                    '  />\n' +
                    '  <path\n' +
                    '    fill-rule="evenodd"\n' +
                    '    clip-rule="evenodd"\n' +
                    '    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"\n' +
                    '    fill="green"\n' +
                    '  />\n' +
                    '</svg>'
            }
            else
            {
                $$("sortieFinLabelClass").config.label =
                    'Sortie fin : <svg\n' +
                    '  width="50"\n' +
                    '  height="50"\n' +
                    '  viewBox="0 0 24 24"\n' +
                    '  fill="none"\n' +
                    '  xmlns="http://www.w3.org/2000/svg"\n' +
                    '>\n' +
                    '  <path\n' +
                    '    d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"\n' +
                    '    fill="red"\n' +
                    '  />\n' +
                    '  <path\n' +
                    '    fill-rule="evenodd"\n' +
                    '    clip-rule="evenodd"\n' +
                    '    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"\n' +
                    '    fill="red"\n' +
                    '  />\n' +
                    '</svg>'
            }
            $$("sortieFinLabelClass").refresh();

            // sortie toilette
            let a = await this.selectSortieToilette(examenExtrait, ajd2);
            if(a[0] == null)
            {
                $$("goodIconClass").config.label =
                    'Sortie toilette : <svg\n' +
                    '  width="50"\n' +
                    '  height="50"\n' +
                    '  viewBox="0 0 24 24"\n' +
                    '  fill="none"\n' +
                    '  xmlns="http://www.w3.org/2000/svg"\n' +
                    '  >\n' +
                    '  <path\n' +
                    '    d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"\n' +
                    '    fill="green"\n' +
                    '  />\n' +
                    '  <path\n' +
                    '    fill-rule="evenodd"\n' +
                    '    clip-rule="evenodd"\n' +
                    '    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"\n' +
                    '    fill="green"\n' +
                    '  />\n' +
                    '</svg>'
            }
            else
            {
                $$("goodIconClass").config.label =
                    'Sortie toilette : <svg\n' +
                    '  width="50"\n' +
                    '  height="50"\n' +
                    '  viewBox="0 0 24 24"\n' +
                    '  fill="none"\n' +
                    '  xmlns="http://www.w3.org/2000/svg"\n' +
                    '>\n' +
                    '  <path\n' +
                    '    d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"\n' +
                    '    fill="red"\n' +
                    '  />\n' +
                    '  <path\n' +
                    '    fill-rule="evenodd"\n' +
                    '    clip-rule="evenodd"\n' +
                    '    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"\n' +
                    '    fill="red"\n' +
                    '  />\n' +
                    '</svg>'
            }
            $$("goodIconClass").refresh();
        }
    }

    setLabel(label){
        $$("heure_actuelle").setValue(label);
        $$("heure_actuelle").refresh();
    }

    async selectSortieToilette(idCoursExamen, dateExamen){
        const envoie = {
            idCoursExamen: idCoursExamen, dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/selectToilette", envoie)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
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