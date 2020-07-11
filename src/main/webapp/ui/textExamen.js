export const examenText = new class textExamen{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textExamen",
            value:"",
            label:"ID de l'examen"
        }
    }

}