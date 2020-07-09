export const buttonSortie = new class Sortie{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSortie",
            value: "Insérer Sortie",
            css: "webix_primary",
            inputWidth: 150,
            click: function (id, event) {
                const sortie = {
                    typeSortie: $$("textTypeSortie").getValue(),
                    heureDebut: "2020-07-08 08:00:00",
                    heureFin: "2020-07-08 08:15:00",
                    cip: $$("textCipSortie").getValue(),
                    idCoursExamen: $$("textExamen").getValue()
                }
                buttonSortie.insertSortie(sortie);
            }
        }
    }

    async insertSortie(sortie) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Sortie insérée"});
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'une sortie",
                    type: 'alert-error',
                });
            });
    }
}