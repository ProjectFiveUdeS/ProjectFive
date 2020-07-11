export const tempsRestantHeure = new class HeureRestante{

    getViewID(){
        return "label"
    }

    get configuration(){
        return{
            view: this.getViewID(),
            label: `<span style="font-size: 150%" >09:59:59</span>`,
            id:"labelTempsRestant",
            hidden:false,
            width:100
        }
    }
}

