import {toolbarTemps} from "./toolbar.js";
import {bottom} from "./bottom.js";
import {toolbarSurveillant} from "./surveillant.js"

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
                bottom.configuration
            ],
        }
    }
};
