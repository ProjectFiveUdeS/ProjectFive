export const buttonSelectExamen = new class SelectExamen {

    getViewID() {
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSelectExam",
            value: "Sélectionner examen",
            css: "webix_primary",
            inputWidth: 150,
            click: function (id, event) {
                const examen = {
                    id_cours_examen: $$("textExamen").getValue(),
                }
                buttonSelectExamen.selectExamen(examen);
            }
        }
    }
}