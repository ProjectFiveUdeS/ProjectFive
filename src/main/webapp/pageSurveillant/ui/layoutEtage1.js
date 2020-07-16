import {cipSortieText} from "./cipSortieText.js";
import {buttonSortie} from "./insertSortieButton.js";
import {typeSortieChooser} from "./typeSortieChooser.js";

export const layoutEtage1 = new class Surveillant{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            css: "custom_style",
            id: "layoutInformations",
            hidden:false,
            height: 70,
            cols: [
                cipSortieText.configuration,
                typeSortieChooser.configuration,
                buttonSortie.configuration,

            ],
        }
    }

}