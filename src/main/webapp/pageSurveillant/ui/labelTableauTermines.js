export const datatableLabelTermines = new class datatableLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Étudiants ayant terminés",
            id:"tableau_termines",
            align: "center",
            hidden:false
        }
    }
}

