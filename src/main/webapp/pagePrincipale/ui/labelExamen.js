export const labelExamen = new class examenLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "",
            id:"examen_actuel",
            hidden:false,
            width:100,
        }
    }
}

