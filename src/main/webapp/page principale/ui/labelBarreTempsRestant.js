export const labelBarreTempsRestant = new class labelBarreTemps{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: `<span style="font-size: 150%" >00:00:00</span>`,
            id:"heure_actuelle_label",
            hidden:false,
            width:100,
        }
    }
}

