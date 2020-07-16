import {datatableSurveillant} from "./datatableSurveillant.js";

export const boutonAjouterSurveillant = new class Surveillant{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSurveillantAjouter",
            value: "Insérer Surveillant",
            css: "webix_primary",
            inputWidth: 150,
            click: function (id, event) {
                const surveillant = {
                    nom : $$("textSurveillantNom").getValue(),
                    prenom : $$("textSurveillantPrenom").getValue(),
                    idSurveillant : $$("textSurveillantId").getValue(),
                    /*nom : "Martin",
                    prenom : "Martin",
                    idCoursExamen : "gif420",
                    numeroLocal : "C1-3024"*/
                }
                boutonAjouterSurveillant.insertSurveillant(surveillant);
            }
        }
    }

    async insertSurveillant(surveillant) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("../api/insertSurveillant", JSON.stringify(surveillant))
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
        $$("teamSurveillant").clearAll();
        await datatableSurveillant.load();
        $$("teamSurveillant").clearAll();
        await datatableSurveillant.load();
    }
}