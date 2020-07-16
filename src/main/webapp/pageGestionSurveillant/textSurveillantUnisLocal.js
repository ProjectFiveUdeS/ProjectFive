export const textSurveillantUnisLocal = new class localSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSurveillantLocal",
            value:"local",
            label:"Local",
            labelWidth: 'auto'
        }
    }
}