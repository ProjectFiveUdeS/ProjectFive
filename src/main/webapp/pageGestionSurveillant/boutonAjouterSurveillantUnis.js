import {datatableSurveillantUnis} from "./datatableSurveillantUnis.js";

export const boutonAjouterSurveillantUnis = new class Surveillant{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSurveillantUnisAjouter",
            value: "Lier Surveillant",
            css: "webix_primary",
            inputWidth: 150,
            click: function (id, event) {
                const surveillantExamen = {
                    idSurveillant : $$("textSurveillantIdSurveillant").getValue(),
                    idCoursExamen : $$("textSurveillantExamen").getValue(),
                    numeroLocal : $$("textSurveillantLocal").getValue(),
                    adapte : $$("switchAdapteSurveillantUnis").getValue(),
                }
                boutonAjouterSurveillantUnis.lieeSurveillantExamen(surveillantExamen);
            }
        }
    }

    async lieeSurveillantExamen(surveillantExamen) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("../api/insertSurveillantUnis", JSON.stringify(surveillantExamen))
            .then(async data => {
                webix.message({type: "success", text: "Surveillant insérée"});
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'un(e) sureveillant(e)",
                    type: 'alert-error',
                });
            });
        $$("teamSurveillantUnis").clearAll();
        await datatableSurveillantUnis.load();
        $$("teamSurveillantUnis").clearAll();
        await datatableSurveillantUnis.load();
    }
}