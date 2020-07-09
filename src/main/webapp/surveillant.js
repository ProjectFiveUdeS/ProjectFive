import {buttonSortie} from "./insertSortieButton.js";
import {cipSortieText} from "./cipSortieText.js";
import {typeSortieText} from "./typeSortieText.js";

export const toolbarSurveillant = new class surveillant {
    debutExam;
    finExam;

    getViewID(){
        return "toolbar"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            paddingY:1,
            hidden:false,
            height:40, elements: [
                    buttonSortie.configuration,
                    cipSortieText.configuration,
                    typeSortieText.configuration,
            ]
        }
    }
}