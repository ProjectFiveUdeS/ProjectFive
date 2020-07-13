export const top = new class Top  {


    get id() {
        return "top"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.id,
            hidden: false,
            elements: [{
                view: "label",
                height: 150,
                label: '<img src="../images/bandeau.png" width="100%">'
            }
            ]
        }
    }
};
