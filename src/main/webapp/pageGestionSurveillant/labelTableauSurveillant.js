export const datatableLabelSurveillant = new class datatableLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Surveillants",
            id:"tableau_surveillants",
            align: "center",
            hidden:false
        }
    }
}

