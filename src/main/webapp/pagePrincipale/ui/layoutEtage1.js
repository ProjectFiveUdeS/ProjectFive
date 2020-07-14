import {labelExamen} from "./labelExamen.js";
import {labelLocal} from "./labelLocal.js";
import {buttonSelectSurveillant} from "./buttonSelectSurveillant.js";
import {textSelectionSurveillant} from "./textSelectionSurveillant.js";
import {labelHeureDebut} from "./labelHeureDebut.js";
import {labelHeureFin} from "./labelHeureFin.js";

export const layoutEtage1 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            css: "custom_style",
            id: "layoutInformations",
            hidden:false,
            height: 70,
            cols: [
                labelExamen.configuration,
                labelLocal.configuration,
                labelHeureDebut.configuration,
                labelHeureFin.configuration,
                textSelectionSurveillant.configuration,
                buttonSelectSurveillant.configuration
            ],
        }
    }

}