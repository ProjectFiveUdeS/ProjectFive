export const toolbar = new class Temps{
    getViewID(){
        return "toolbar";
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.getViewID(),
            paddingY:1,
            hidden:false,
            height:40, elements: [
                {
                    view: "label",
                    label: `<span style="font-size: 150%" >00:00:00</span>`,
                    id:'heure_actuelle',
                    hidden:false,
                    width:100,
                },
                {
                    view:"bullet",
                    minRange:0,
                    maxRange:100,
                    value:0,
                    flowTime:1000,
                    bands:[
                        {value:33, color:"red"},
                        {value:100, color:"green"},
                    ],
                    id:'barre_temps_restant'
                },
                {
                    view: "label",
                    label: `<span style="font-size: 150%" >09:59:59</span>`,
                    id:'temps_restant',
                    hidden:false,
                    width:100
                }
            ]
        }
    }

}





