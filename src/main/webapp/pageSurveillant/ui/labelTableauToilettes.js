export const datatableLabelToilettes = new class datatableLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Sorties aux toilettes",
            id:"tableau_toilettes",
            align: "center",
            hidden:false
        }
    }
}

