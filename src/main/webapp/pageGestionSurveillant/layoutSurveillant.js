import {datatableSurveillant} from "./datatableSurveillant.js";
import {layoutSurveillantBouton} from "./layoutSurveillantBouton.js";
import {datatableExamen} from "./datatableExamen.js";

export const layoutSurveillant = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            hidden:false,
            width:500,
            elements: [
                datatableExamen.configuration,
                datatableSurveillant.configuration,
                layoutSurveillantBouton.configuration,
            ]
        }
    }
}