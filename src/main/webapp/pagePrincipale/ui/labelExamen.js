export const labelExamen = new class examenLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Examen :",
            id:"examen_actuel",
            hidden:false,
            width:150,
        }
    }
}

