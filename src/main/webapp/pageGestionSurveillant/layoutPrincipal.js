import {layoutSurveillantUnis} from "./layoutSurveillantUnis.js";
import {layoutSurveillant} from "./layoutSurveillant.js";
import {layoutEtudiant} from "./layoutEtudiant.js";
import {bandeau} from "./bandeau.js";

export const layoutPrincipal = new class {

    get views() {
        return {
            none: 'emptyView',
        };
    }

    get id() {
        return "main";
    }

    get configuration() {
        return {
            view: 'form',
            id: 'main',
            css: 'my_style',
            /*padding:{
                top:0, bottom:0, left:100, right:0
            },*/
            paddingX:-5,
            paddingY:-5,
            multiselect:true,

            rows: [
                bandeau.configuration,
                layoutSurveillantUnis.configuration,
                layoutSurveillant.configuration,
                //layoutEtudiant.configuration,

            ],
        }
    }
};
