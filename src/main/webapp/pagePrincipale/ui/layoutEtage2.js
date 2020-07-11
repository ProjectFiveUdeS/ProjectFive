import {boxHeureDebutHeureFin} from "./boxHeureDebutHeureFin.js";
import {boxTempsRestant} from "./boxTempsRestant.js";

export const layoutEtage2 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutTemps",
            paddingY:1,
            hidden:false,
            height:200, cols: [
                {},
                boxHeureDebutHeureFin.configuration,
                {},
                boxTempsRestant.configuration,
                {},
            ],
        }
    }

}