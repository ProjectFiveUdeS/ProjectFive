export const labelLocal = new class localLabel{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Local : N/A",
            id:"local_actuel",
            hidden:false
        }
    }
}

