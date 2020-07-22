export const textSurveillantNom = new class nomSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantNom",
            label:"Nom du surveilant(e)",
            labelWidth: 'auto'
        }
    }
}