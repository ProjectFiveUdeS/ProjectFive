export const textSelectionSurveillant = new class selectionSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textSelectionSurveillant",
            value:"",
            label:"Surveillant"
        }
    }
}