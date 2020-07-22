
export const bandeau = new class Bandeau  {


    get id() {
        return "bandeau"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.id,
            hidden: false,
            elements: [{
                view: "label",
                height:150,
                label: '<img src="../images/bandeau.png" width="100%">'
            },

            ]
        }
    }

    message() {
        const text  = "Produit par l'équipe 5 du programme de génie informatique de la Faculté de génie";
        const color =  "color:grey;";
        return   `<span style="font-size: 90%; ${color}" >${text}</span>`;
    }
};
