import {labelExamen} from "./labelExamen.js";
import {labelLocal} from "./labelLocal.js";
import {buttonSelectSurveillant} from "./buttonSelectSurveillant.js";
import {textSelectionSurveillant} from "./textSelectionSurveillant.js";

export const layoutEtage1 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutInformations",
            paddingY:1,
            hidden:false,
            height:50, cols: [
                labelExamen.configuration,
                labelLocal.configuration,
                {},
                buttonSelectSurveillant.configuration,
                textSelectionSurveillant.configuration
            ],
        }
    }

}