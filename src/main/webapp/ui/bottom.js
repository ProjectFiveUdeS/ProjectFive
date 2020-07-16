
export const bottom = new class Bottom  {


    get id() {
        return "bottom"
    }

    get configuration() {
        return {
            view: "toolbar",
            id: this.id,
            hidden: false,
            elements: [{
                view: "label",
                width:500,
                height:200,
                label: '<img src="../images/Chat_Blanc_Yeux_Vairons.jpg" width="110%">'
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
