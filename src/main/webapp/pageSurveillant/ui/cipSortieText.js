export const cipSortieText = new class cipSortie{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textCipSortie",
            placeholder:"CIP étudiant"
        }
    }
}