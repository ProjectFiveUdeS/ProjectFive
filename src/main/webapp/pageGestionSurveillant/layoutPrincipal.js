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
            paddingX:-5,
            paddingY:-5,
            multiselect:true,

            rows: [
                bandeau.configuration,
                layoutSurveillantUnis.configuration,
                layoutSurveillant.configuration,

            ],
        }
    }
};
