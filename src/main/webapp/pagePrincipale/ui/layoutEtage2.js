import {boxTempsRestant} from "./boxTempsRestant.js";
import {labelHeureActuelle} from "./labelHeureActuelle.js";
import {boxToilette} from "./boxToilette.js";
import {boxSortieFin} from "./boxSortieFin.js";

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
            height: 500,
            cols: [
                {
                    rows: [
                        labelHeureActuelle.configuration,
                        boxTempsRestant.configuration
                    ],
                },
                {
                    rows: [
                        boxToilette.configuration,
                        boxSortieFin.configuration
                    ],
                }
            ]
        }
    }

}