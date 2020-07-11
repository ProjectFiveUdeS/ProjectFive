import {labelHeureActuelle} from "./labelHeureActuelle.js";
import {bulletTempsRestant} from "./barreTempsRestant.js";
import {tempsRestantHeure} from "./tempsRestantHeure.js";

export const boxTempsRestant = new class boxRestant{

    getViewID(){
        return "layout";
    }

    get configuration(){
        return {
            view: 'form',
                id: 'boxRestant',
                rows: [
                    labelHeureActuelle.configuration,
                    bulletTempsRestant.configuration,
                    tempsRestantHeure.configuration
            ],
            alignment:"right",
            width:500,
            height:250,
            borderless: true
        }
    }
}