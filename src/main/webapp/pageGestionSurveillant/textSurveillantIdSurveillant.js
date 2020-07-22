export const textSurveillantIdSurveillant = new class idSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantId",
            label:"ID du surveillant(e)",
            labelWidth: 'auto'
        }
    }
}