import {buttonSortie} from "./insertSortieButton.js";
import {cipSortieText} from "./cipSortieText.js";
import {typeSortieText} from "./typeSortieText.js";
import {textSelectionSurveillant} from "./textSelectionSurveillant.js";
import {labelLocal} from "./labelLocal.js";
import {labelExamen} from "./labelExamen.js";
import {buttonSelectSurveillant} from "./buttonSelectSurveillant.js";

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
                    /*labelLocal.configuration,
                    labelExamen.configuration,
                    buttonSelectSurveillant.configuration,
                    textSelectionSurveillant.configuration,
                    typeSortieText.configuration,*/
            ]
        }
    }

    async selectSurveillant(prenom, nom){
        const envoi = {
            prenom: prenom,
            nom: nom
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/surveillantSelectId", envoi)
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