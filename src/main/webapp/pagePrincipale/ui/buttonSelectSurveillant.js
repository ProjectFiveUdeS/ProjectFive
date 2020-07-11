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
            inputWidth: 150,
            click: async function (id, event) {
                console.log("test");
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
                $$("local_actuel").define("label",retour2.numeroLocal);
                $$("local_actuel").refresh();
                $$("examen_actuel").define("label",retour2.idCoursExamen);
                $$("examen_actuel").refresh();
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
}