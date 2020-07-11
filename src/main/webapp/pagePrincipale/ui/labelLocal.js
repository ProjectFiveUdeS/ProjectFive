export const labelLocal = new class localLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Local :",
            id:"local_actuel",
            hidden:false,
            width:150,
        }
    }
}

