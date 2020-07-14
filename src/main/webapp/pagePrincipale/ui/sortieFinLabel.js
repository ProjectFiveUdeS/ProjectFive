export const sortieFinLabel = new class sortieFinLabelClass  {


    get id() {
        return "sortieFinLabelClass"
    }

    get configuration() {
        return {
            view: "label",
            id: this.id,
            hidden: false,
            label: 'Sortie fin :'
        }
    }
};
