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
                height: 123,
                label: '<img src="../images/gestion%20examen.PNG" width="100%">'
            }
            ]
        }
    }
};
