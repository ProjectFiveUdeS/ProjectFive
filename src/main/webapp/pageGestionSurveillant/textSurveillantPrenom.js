export const textSurveillantPrenom = new class prenomSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantPrenom",
            label:"Prenom du surveilant(e)",
            labelWidth: 'auto'
        }
    }
}