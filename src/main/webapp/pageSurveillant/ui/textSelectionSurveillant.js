export const textSelectionSurveillant = new class selectionSurveillant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            css: "my_style",
            view:this.getViewID(),
            id: "textSelectionSurveillant",
            placeholder: "CIP surveillant"
        }
    }
}