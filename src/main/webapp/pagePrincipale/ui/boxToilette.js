import {sortieToiletteLabel} from "./sortieToiletteLabel.js";
import {popupSortie} from "./popupSortie.js";
import {buttonAddSortie} from "./buttonAddSortie.js";

export const boxToilette = new class boxToiletteClass{

    getViewID(){
        return "layout";
    }

    get configuration(){
        return {
            view: 'form',
            id: 'boxToiletteClass',
            borderless: true,
            height: 200,
            width: 700,
            cols: [
                sortieToiletteLabel.configuration,
                buttonAddSortie.configuration
            ]
        }
    }
}