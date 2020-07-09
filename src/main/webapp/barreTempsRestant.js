export const bulletTempsRestant = new class bulletTemps{

    getViewID(){
        return "bullet"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            minRange:0,
            maxRange:100,
            value:0,
            flowTime:1000,
            bands:[
                {value:33, color:"red"},
                {value:100, color:"green"}
            ],
            id:'bulletTempsRestant'
        }
    }
}

