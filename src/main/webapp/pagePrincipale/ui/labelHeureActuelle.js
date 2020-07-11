export const labelHeureActuelle = new class Heure{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: `<span style="font-size: 150%" >00:00:00</span>`,
            id:"heure_actuelle",
            hidden:false,
            width:100,
            top: 500,
            left: 500
        }
    }
}

