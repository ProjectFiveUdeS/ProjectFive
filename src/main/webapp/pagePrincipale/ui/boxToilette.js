import {sortieToiletteLabel} from "./sortieToiletteLabel.js";

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
                sortieToiletteLabel.configuration
            ]
        }
    }
}