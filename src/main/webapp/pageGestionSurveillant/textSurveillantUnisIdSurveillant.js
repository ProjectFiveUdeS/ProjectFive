export const textSurveillantUnisIdSurveillant = new class idSurveillantSurveillant {

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantIdSurveillant",
            label:"ID de surveillant",
            labelWidth: 'auto'
        }
    }
}