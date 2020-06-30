import {datatable} from "./datatable.js";

export class surveillant {

    async insertSortie(sortie) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Trimestre inséré"});
                webix.ui(datatable.configuration, $$(datatable.id));
                await datatable.loadSorties();
                $$(this.id).close();
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