import {buttonSortie} from "./insertSortieButton.js";
import {cipSortieText} from "./cipSortieText.js";
import {typeSortieText} from "./typeSortieText.js";
import {textSelectionSurveillant} from "./textSelectionSurveillant.js";

export const toolbarSurveillant = new class surveillant {

    getViewID(){
        return "toolbar"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            paddingY:1,
            hidden:false,
            height:40, elements: [
                    buttonSortie.configuration,
                    cipSortieText.configuration,
                    textSelectionSurveillant.configuration,
                    typeSortieText.configuration,
            ]
        }
    }

    async selectSurveillant(prenom, nom){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/surveillantSelectId", nom, prenom)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectSurveille(idSurveillant, dateExamen){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/surveille", idSurveillant, dateExamen)
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
            .get("api/examen", idCours)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

}