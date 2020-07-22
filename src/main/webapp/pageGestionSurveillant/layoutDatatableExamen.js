import {datatableExamen} from "./datatableExamen.js";
import {datatableLabelExamen} from "./labelTableauExamen.js";



export const layoutDatatableExamen = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "layout",
            id: this.getViewID(),
            hidden:false,
            rows: [
                datatableLabelExamen.configuration,
                datatableExamen.configuration
            ]
        }
    }
}