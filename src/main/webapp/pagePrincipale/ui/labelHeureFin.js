export const labelHeureFin = new class HeureFin{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Heure fin : N/A",
            id:"heure_fin",
            hidden:false,
            width: 400
        }
    }
}

