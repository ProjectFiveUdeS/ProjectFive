import {cipSortieText} from "./cipSortieText.js";
import {buttonSortie} from "./insertSortieButton.js";
import {typeSortieChooser} from "./typeSortieChooser.js";
import {textSelectionSurveillant} from "./textSelectionSurveillant.js";
import {buttonRetour} from "./declarerRetourButton.js";

export const layoutEtage1 = new class Surveillant{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            css: "custom_style",
            id: "layoutEtage1",
            hidden:false,
            height: 70,
            cols: [
                cipSortieText.configuration,
                textSelectionSurveillant.configuration,
                typeSortieChooser.configuration,
                buttonSortie.configuration,
                buttonRetour.configuration
            ],
        }
    }

}