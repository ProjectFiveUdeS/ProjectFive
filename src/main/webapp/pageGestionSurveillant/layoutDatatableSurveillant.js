import {datatableSurveillant} from "./datatableSurveillant.js";
import {datatableLabelSurveillant} from "./labelTableauSurveillant.js";



export const layoutDatatableSurveillant = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "layout",
            id: this.getViewID(),
            hidden:false,
            rows: [
                datatableLabelSurveillant.configuration,
                datatableSurveillant.configuration
            ]
        }
    }
}