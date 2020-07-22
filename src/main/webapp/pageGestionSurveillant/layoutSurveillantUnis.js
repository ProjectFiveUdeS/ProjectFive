import {datatableSurveillantUnis} from "./datatableSurveillantUnis.js";
import {datatableSurveillant} from "./datatableSurveillant.js";
import {layoutSurveillantBouton} from "./layoutSurveillantBouton.js";
import {layoutSurveillantUnisBouton} from "./layoutSurveillantUnisBouton.js";
import {datatableLabelLies} from "./labelTableauUnis.js";
import {layoutDatatableUnis} from "./layoutDatatableUnis.js";

export const layoutSurveillantUnis = new class  {

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
                layoutDatatableUnis.configuration,
                layoutSurveillantUnisBouton.configuration
                //textSurveillantLocal.configuration,
                // cipSortieText.configuration,
                // typeSortieText.configuration,
            ]
        }
    }
}