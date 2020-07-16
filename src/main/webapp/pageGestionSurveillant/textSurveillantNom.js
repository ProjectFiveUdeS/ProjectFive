export const textSurveillantNom = new class nomSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantNom",
            value:"nom",
            label:"Nom du surveilant(e)",
            labelWidth: 'auto'
        }
    }
}