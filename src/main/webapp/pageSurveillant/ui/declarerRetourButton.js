import {datatableToilettes} from "./datatableToilettes.js";

export const buttonRetour = new class Retour{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonRetour",
            value: "Déclarer retour",
            css: "webix_primary",
            inputWidth: 150,
            click: async function (id, event) {
                let ajd = new Date().toLocaleDateString();
                let annee = ajd.split('/')[2];
                let mois = ajd.split('/')[0];
                let jour = ajd.split('/')[1];
                jour = (jour < 10 ? "0" : "") + jour;
                mois = (mois < 10 ? "0" : "") + mois;
                let ajd2 = annee + "-" + mois + "-" + jour;
                let currentTime = new Date ();
                let heure = currentTime.getHours();
                let min = currentTime.getMinutes();
                let sec = currentTime.getSeconds();
                min = (min < 10 ? "0" : "") + min;
                sec = (sec < 10 ? "0" : "") + sec;
                heure = (heure < 10 ? "0" : "") + heure;
                let temps = "2020-07-20 " + heure+":"+min+":"+sec;
                let surveillant = $$("textSelectionSurveillant").getValue();
                let surveille = await buttonRetour.selectSurveille(surveillant, ajd2);
                let surveille2 = surveille[0];
                await buttonRetour.insertRetour(surveille2.idCoursExamen, surveille2.dateExamen, temps);
                await datatableToilettes.loadSorties();
            }
        }
    }

    async insertRetour(idExamen, dateExamen, temps) {
        const envoi = {
            idCoursExamen: idExamen,
            dateExamen: dateExamen,
            heureFin: temps
        }
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("../api/insertRetour", envoi)
            .then(async data => {
                webix.message({type: "success", text: "Sortie modifiée"});
            })
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

    async selectSortieToilette(idCoursExamen, dateExamen){
        const envoi = {
            idCoursExamen: idCoursExamen, dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/selectToilette", envoi)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }
}