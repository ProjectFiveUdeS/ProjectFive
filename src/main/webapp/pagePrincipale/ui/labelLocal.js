export const labelLocal = new class localLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "",
            id:"local_actuel",
            hidden:false,
            width:100,
        }
    }
}

