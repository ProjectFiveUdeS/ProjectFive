import {datatableTermine} from "./datatableTermine.js";
import {datatableToilettes} from "./datatableToilettes.js";
import {datatableLabelToilettes} from "./labelTableauToilettes.js";
import {datatableLabelTermines} from "./labelTableauTermines.js";


export const layoutEtage2 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutEtage2",
            hidden:false,
            cols: [
                {},
                {
                    rows: [
                        datatableLabelToilettes.configuration,
                        datatableToilettes.configuration,
                        datatableLabelTermines.configuration,
                        datatableTermine.configuration
                    ],
                },
                {}
            ]
        }
    }

}