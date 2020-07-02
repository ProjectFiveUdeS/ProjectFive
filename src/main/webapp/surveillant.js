import {datatable} from "./datatable.js";

export class surveillant {
    debutExam;
    finExam;

    async insertSortie(sortie) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Sortie insérée"});
                webix.ui(datatable.configuration, $$(datatable.id));
                await datatable.loadSorties();
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

    async selectExamen(id_cours_examen){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/examen", id_cours_examen)
            .then(data => data.json())
            .then(data => {
                this.debutExam = data,
                this.finExam = $('#fin')
            })
            .catch((reason) => {
                console.error(reason);
            });
    }

    getDebut(){
        return this.debutExam;
    }

    getFin(){
        return this.finExam;
    }
}