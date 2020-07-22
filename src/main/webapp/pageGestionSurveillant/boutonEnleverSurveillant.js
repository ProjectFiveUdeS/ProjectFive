import {datatableSurveillant} from "./datatableSurveillant.js";

export const boutonEnleverSurveillant = new class Surveillant{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSurveillantEnlever",
            value: "Enlever Surveillant",
            css: "webix_primary",
            inputWidth: 150,
            height: 50,
            click: function (id, event) {
                const surveillant = {
                    idSurveillant : $$("textSurveillantId").getValue(),
                    /*nom : "Martin",
                    prenom : "Martin",
                    idCoursExamen : "gif420",
                    numeroLocal : "C1-3024"*/
                }
                boutonEnleverSurveillant.enleverSurveillant(surveillant);
            }
        }
    }

    async enleverSurveillant(surveillant) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .del("../api/deleteSurveillantId", JSON.stringify(surveillant))
            .then(async data => {
                webix.message({type: "success", text: "Surveillant enlever"});
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de la supression d'un(e) sureveillant(e)",
                    type: 'alert-error',
                });
            });
        $$("teamSurveillant").clearAll();
        await datatableSurveillant.load();
        $$("teamSurveillant").clearAll();
        await datatableSurveillant.load();
    }
}