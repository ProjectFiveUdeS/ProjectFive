import {labelHeureDebut} from "./labelHeureDebut.js";
import {labelHeureFin} from "./labelHeureFin.js";

export const boxHeureDebutHeureFin = new class boxTemps{

    getViewID(){
        return "layout";
    }

    get configuration(){
        return {
            view: 'form',
            id: 'boxHeureDebutHeureFin',
            rows: [
                {},
                labelHeureFin.configuration,
                {}
            ],
            alignment:"left",
            width:500,
            height:250,
            borderless: true
        }


    }
}

