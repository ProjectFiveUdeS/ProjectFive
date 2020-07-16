export const textSurveillantUnisIdSurveillant = new class idSurveillantSurveillant {

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantIdSurveillant",
            value:"id surveillant",
            label:"ID de surveillant",
            labelWidth: 'auto'
        }
    }
}