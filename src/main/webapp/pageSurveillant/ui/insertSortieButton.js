import {datatableToilettes} from "./datatableToilettes.js";
import {datatableTermine} from "./datatableTermine.js";

export const buttonSortie = new class Sortie{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSortie",
            value: "Insérer Sortie",
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
                let typeSortieVar;
                if($$("typeSortieChooser").getValue() == "Toilettes"){
                    typeSortieVar = 1;
                }
                else if ($$("typeSortieChooser").getValue() == "Terminé")
                {
                    typeSortieVar = 0;
                }
                let currentTime = new Date ();
                let heure = currentTime.getHours();
                let min = currentTime.getMinutes();
                let sec = currentTime.getSeconds();
                min = (min < 10 ? "0" : "") + min;
                sec = (sec < 10 ? "0" : "") + sec;
                heure = (heure < 10 ? "0" : "") + heure;
                let temps = "2020-07-20 " + heure+":"+min+":"+sec;
                let surveillant = $$("textSelectionSurveillant").getValue();
                let surveille = await buttonSortie.selectSurveille(surveillant, ajd2);
                let surveille2 = surveille[0];
                    const sortie = {
                        typeSortie: typeSortieVar,
                        heureDebut: temps,
                        heureFin: null,
                        cip: $$("textCipSortie").getValue(),
                        idCoursExamen: surveille2.idCoursExamen,
                        dateExamen: ajd2
                    }
                let test = await buttonSortie.selectSortieToilette(surveille2.idCoursExamen, ajd2);
                    console.log(test);
                if(test[0] == null){
                    await buttonSortie.insertSortie(sortie);
                    await datatableToilettes.loadSorties();
                    await datatableTermine.loadSorties();
                }
                else {
                    webix.message({type: "failure", text: "Impossible d'insérer une sortie"});
                }
            }
        }
    }

    async insertSortie(sortie) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("../api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Sortie insérée"});
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