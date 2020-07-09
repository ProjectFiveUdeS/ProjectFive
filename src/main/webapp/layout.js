import {toolbarTemps} from "./toolbar.js";
import {datatable} from "./datatable.js";
import {bottom} from "./bottom.js";
import {toolbarSurveillant} from "./surveillant.js"
import {examenText} from "./textExamen.js";

export const layout = new class {

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
            rows: [
                toolbarTemps.configuration,
                toolbarSurveillant.configuration,
                examenText.configuration,
                bottom.configuration
            ],
        }
    }
};
