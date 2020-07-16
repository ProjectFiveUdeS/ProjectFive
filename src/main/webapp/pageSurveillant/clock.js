import {datatableToilettes} from "./ui/datatableToilettes.js";
import {datatableTermine} from "./ui/datatableTermine.js";

export class Clock{

    async updateClock(){
        await datatableTermine.loadSorties();
        await datatableToilettes.loadSorties();
    }

    setLabel(label){
        $$("heure_actuelle").setValue(label);
        $$("heure_actuelle").refresh();
    }
}