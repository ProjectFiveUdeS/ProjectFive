

export const layoutEtage2 = new class Temps{
    getViewID(){
        return "layout";
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "layoutTemps",
            css: "huge_style",
            hidden:false,
            cols: [
                {},
                {
                    rows: [

                    ],
                },
                {}
            ]
        }
    }

}