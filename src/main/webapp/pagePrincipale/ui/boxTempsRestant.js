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
                borderless: true,
                rows: [
                    bulletTempsRestant.configuration,
                    tempsRestantHeure.configuration
            ]
        }
    }
}