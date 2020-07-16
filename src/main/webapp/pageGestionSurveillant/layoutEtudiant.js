import {datatableEtudiant} from "./datatableEtudiant.js";
import {layoutEtudiantBouton} from "./layoutEtudiantBouton.js";

export const layoutEtudiant = new class  {

    getViewID(){
        return "layout"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            hidden:false,
            elements: [
                //layoutEtudiantBouton.configuration,
                datatableEtudiant.configuration,
            ]
        }
    }
}