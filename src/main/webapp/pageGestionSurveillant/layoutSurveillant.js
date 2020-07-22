import {layoutSurveillantBouton} from "./layoutSurveillantBouton.js";
import {layoutDatatableExamen} from "./layoutDatatableExamen.js";
import {layoutDatatableSurveillant} from "./layoutDatatableSurveillant.js";

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
                layoutDatatableExamen.configuration,
                layoutDatatableSurveillant.configuration,
                layoutSurveillantBouton.configuration,
            ]
        }
    }
}