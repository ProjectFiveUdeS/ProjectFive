export const labelHeureDebut = new class HeureDebut{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Heure début : ",
            id:"heure_debut",
            hidden:false,
            width:200,
        }
    }
}

