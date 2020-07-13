import {bottom} from "./bottom.js";
import {layoutEtage2} from "./layoutEtage2.js";
import {layoutEtage1} from "./layoutEtage1.js";
import {top} from "./top.js";

export const layoutPagePrincipale = new class {

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
            css: "my_style",
            rows: [
                top.configuration,
                layoutEtage1.configuration,
                layoutEtage2.configuration,
                bottom.configuration,
            ],
        }
    }
};
