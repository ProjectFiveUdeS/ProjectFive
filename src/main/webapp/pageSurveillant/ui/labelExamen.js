export const labelExamen = new class examenLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Examen : N/A",
            id:"examen_actuel",
            hidden:false
        }
    }
}

