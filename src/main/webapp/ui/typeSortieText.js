export const typeSortieText = new class typeSortie{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textTypeSortie",
            value:"Type Sortie",
            label:"Type Sortie"
        }
    }
}