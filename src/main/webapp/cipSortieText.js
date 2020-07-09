export const cipSortieText = new class cipSortie{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textCipSortie",
            value:"cip",
            label:"cip"
        }
    }
}