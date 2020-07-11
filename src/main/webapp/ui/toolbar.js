import {labelHeureActuelle} from "./labelHeureActuelle.js"
import {bulletTempsRestant} from "./barreTempsRestant.js"
import {tempsRestantHeure} from "./tempsRestantHeure.js"
import {buttonSortie} from "./insertSortieButton.js"
import {cipSortieText} from "./cipSortieText.js"
import {typeSortieText} from "./typeSortieText.js";

export const toolbarTemps = new class Temps{
    getViewID(){
        return "toolbar";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "toolbarTest",
            paddingY:1,
            hidden:false,
            height:40, elements: [
                labelHeureActuelle.configuration,
                bulletTempsRestant.configuration,
                tempsRestantHeure.configuration
            ]
        }
    }

}





