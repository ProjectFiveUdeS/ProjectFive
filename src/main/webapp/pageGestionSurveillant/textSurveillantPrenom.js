export const textSurveillantPrenom = new class prenomSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantPrenom",
            value:"prenom",
            label:"Prenom du surveilant(e)",
            labelWidth: 'auto'
        }
    }
}