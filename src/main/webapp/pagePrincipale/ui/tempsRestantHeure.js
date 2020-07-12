export const tempsRestantHeure = new class HeureRestante{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: "Temps restant : N/A",
            id:"labelTempsRestant",
            hidden:false,
            align: "center",
            height: 100,
            width: 1000
        }
    }
}

