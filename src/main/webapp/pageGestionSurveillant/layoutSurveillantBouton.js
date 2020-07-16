import {textSurveillantNom} from "./textSurveillantNom.js";
import {textSurveillantPrenom} from "./textSurveillantPrenom.js";
import {textSurveillantIdSurveillant} from "./textSurveillantIdSurveillant.js";
import {boutonAjouterSurveillant} from "./boutonAjouterSurveillant.js";
import {boutonEnleverSurveillant} from "./boutonEnleverSurveillant.js";

export const layoutSurveillantBouton = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            hidden:false,
            width:375,
            rows: [
                boutonAjouterSurveillant.configuration,
                boutonEnleverSurveillant.configuration,
                textSurveillantIdSurveillant.configuration,
                textSurveillantNom.configuration,
                textSurveillantPrenom.configuration,
            ]
        }
    }
}