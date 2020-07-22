export const textSurveillantUnisExamen = new class examenSurveillant {

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantExamen",
            label:"ID de l'examen",
            labelWidth: 'auto'
        }
    }
}