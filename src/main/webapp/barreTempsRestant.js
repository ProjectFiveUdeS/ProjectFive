export const bulletTempsRestant = new class bulletTemps{

    /*getViewID(){
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
                {value:33, color:"white"}
            ],
            stroke:8,
            scale:{
                step:20,
                template:"#value#%"
            },
            id:'bulletTempsRestant',
            marker:100,
            label: ""
        }
    }*/

    getViewID(){
        return "slider";
    }

    get configuration(){
        return {
            id: "slider",
            label:"Début",
            view: this.getViewID(),
            value:"0",
            min:0,
            max: 100,
            name:"s1",
            disabled: true
        }


    }
}

