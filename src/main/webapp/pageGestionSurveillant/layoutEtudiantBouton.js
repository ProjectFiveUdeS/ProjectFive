import {textEtudiantNom} from "./textEtudiantNom.js";
import {textEtudiantPrenom} from "./textEtudiantPrenom.js";

export const layoutEtudiantBouton = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            hidden:false,
            rows: [
                textEtudiantPrenom.configuration,
                textEtudiantNom.configuration,
            ]
        }
    }
}