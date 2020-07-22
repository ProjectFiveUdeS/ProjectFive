export const datatableLabelLies = new class datatableLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Surveillants et examens liés",
            id:"tableau_unis",
            align: "center",
            hidden:false
        }
    }
}

