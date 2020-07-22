import {datatableLabelLies} from "./labelTableauUnis.js";
import {datatableSurveillantUnis} from "./datatableSurveillantUnis.js";



export const layoutDatatableUnis = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "layout",
            id: this.getViewID(),
            hidden:false,
            rows: [
                datatableLabelLies.configuration,
                datatableSurveillantUnis.configuration,
            ]
        }
    }
}