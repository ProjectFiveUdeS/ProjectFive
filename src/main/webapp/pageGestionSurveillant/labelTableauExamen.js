export const datatableLabelExamen = new class datatableLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Examens",
            id:"tableau_examens",
            align: "center",
            hidden:false
        }
    }
}

