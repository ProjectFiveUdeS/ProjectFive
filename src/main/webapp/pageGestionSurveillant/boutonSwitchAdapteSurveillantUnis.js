export const boutonSwitchAdapteSurveillantUnis = new class boutonSwitch {

    getViewID(){
        return "switch"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "switchAdapteSurveillantUnis",
            labelWidth: 'auto',
            labelRight:"Adapte"
        }
    }
}