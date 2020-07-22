export const typeSortieChooser = new class typeSortie{

    getViewID(){
        return "select"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "typeSortieChooser",
            options:[
                {
                    id: "Toilettes",
                    value: "Toilettes"
                },
                {
                    id: "Terminé",
                    value: "Terminé"
                }
            ]
        }
    }
}