export const bulletTempsRestant = new class bulletTemps{

    getViewID(){
        return "slider";
    }

    get configuration(){
        return {
            id: "slider",
            view: this.getViewID(),
            value:"0",
            min:0,
            max: 100,
            name:"s1",
            disabled: true
        }


    }
}

