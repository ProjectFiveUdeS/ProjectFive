import {textSurveillantUnisExamen} from "./textSurveillantUnisExamen.js";
import {textSurveillantUnisLocal} from "./textSurveillantUnisLocal.js";
import {textSurveillantUnisIdSurveillant} from "./textSurveillantUnisIdSurveillant.js";
import {boutonAjouterSurveillantUnis} from "./boutonAjouterSurveillantUnis.js";
import {boutonSwitchAdapteSurveillantUnis} from "./boutonSwitchAdapteSurveillantUnis.js";

export const layoutSurveillantUnisBouton = new class  {

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
                boutonAjouterSurveillantUnis.configuration,
                textSurveillantUnisIdSurveillant.configuration,
                textSurveillantUnisExamen.configuration,
                textSurveillantUnisLocal.configuration,
                boutonSwitchAdapteSurveillantUnis.configuration,
            ]
        }
    }
}