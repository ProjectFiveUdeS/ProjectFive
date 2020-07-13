import {boxHeureDebutHeureFin} from "./boxHeureDebutHeureFin.js";
import {boxTempsRestant} from "./boxTempsRestant.js";
import {labelHeureFin} from "./labelHeureFin.js";
import {labelHeureActuelle} from "./labelHeureActuelle.js";

export const layoutEtage2 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutTemps",
            css: "huge_style",
            hidden:false,
            cols: [
                {},
                {
                    rows: [
                        labelHeureActuelle.configuration,
                        boxTempsRestant.configuration
                    ],
                },
                {}
            ]
        }
    }

}