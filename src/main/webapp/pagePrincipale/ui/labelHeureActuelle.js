export const labelHeureActuelle = new class Heure{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Heure actuelle : N/A",
            id:"heure_actuelle",
            hidden:false,
            align: "center",
            height: 200,
            width: 1000
        }
    }
}

