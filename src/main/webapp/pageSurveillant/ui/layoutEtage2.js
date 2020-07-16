import {datatableTermine} from "./datatableTermine.js";
import {datatableToilettes} from "./datatableToilettes.js";


export const layoutEtage2 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutEtage2",
            css: "huge_style",
            hidden:false,
            cols: [
                {},
                {
                    rows: [
                        datatableTermine.configuration,
                        datatableToilettes.configuration
                    ],
                },
                {}
            ]
        }
    }

}