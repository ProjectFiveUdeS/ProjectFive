export const labelHeureDebut = new class HeureDebut{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Heure début : N/A",
            id:"heure_debut",
            hidden:false,
            width: 400
        }
    }
}

