export const textSurveillantUnisExamen = new class examenSurveillant {

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantExamen",
            value:"id examen",
            label:"ID de l'examen",
            labelWidth: 'auto'
        }
    }
}