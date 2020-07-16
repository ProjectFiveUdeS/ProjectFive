export const buttonSelectSurveillant = new class SelectSurveillant {

    getViewID() {
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSelectSuurv",
            value: "Sélectionner surveillant",
            css: "webix_primary",
            click: async function (id, event) {
                let surveillantId = $$("textSelectionSurveillant").getValue();
                let ajd = new Date().toLocaleDateString();
                let annee = ajd.split('/')[2];
                let mois = ajd.split('/')[0];
                let jour = ajd.split('/')[1];
                jour = (jour < 10 ? "0" : "") + jour;
                mois = (mois < 10 ? "0" : "") + mois;
                let ajd2 = annee + "-" + mois + "-" + jour;
                let retour = await buttonSelectSurveillant.selectSurveille(surveillantId, ajd2);
                let retour2 = retour[0];
                $$("local_actuel").define("label","Local : " + retour2.numeroLocal);
                $$("local_actuel").refresh();
                $$("examen_actuel").define("label","Examen : " + retour2.idCoursExamen);
                $$("examen_actuel").refresh();
                let examen = await buttonSelectSurveillant.selectExamen(retour2.idCoursExamen, ajd2);
                let examen2 = examen[0];
                $$("heure_debut").define("label", "Heure début : " + examen2.debut);
                $$("heure_debut").refresh();
                console.log(retour2.adapte);
                if(!retour2.adapte){
                    $$("heure_fin").define("label", "Heure fin : " + examen2.fin);
                    $$("heure_fin").refresh();
                }
                else{
                    $$("heure_fin").define("label", "Heure fin : " + examen2.finAdapte);
                    $$("heure_fin").refresh();
                }
            }
        }
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
        const envoi = {
            idCoursExamen: idCoursExamen,
            dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/examen", envoi)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }
}