import {sortieFinLabel} from "./sortieFinLabel.js";

export const boxSortieFin = new class boxSortieFinClass{

    getViewID(){
        return "layout";
    }

    get configuration(){
        return {
            view: 'form',
            id: 'boxSortieFinClass',
            borderless: true,
            height: 200,
            width: 700,
            cols: [
                sortieFinLabel.configuration
            ]
        }
    }
}