export class Gestion{
    async selectExamen(id_cours_examen) {
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/examen", id_cours_examen)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectAssisA(cip) {
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/assis_a", cip)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectEtudiant(cip){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/etudiant", cip)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectLocal(numero_local){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/local", numero_local)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectPlace(numero_chaise, numero_local){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/place", numero_chaise, numero_local)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectSortie(id_sortie){
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/sorties", id_sortie)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }

    async insertExamen(examen){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertExamen", JSON.stringify(examen))
            .then(async data => {
                webix.message({type: "success", text: "Examen inséré"});
              /*  webix.ui(datatable.configuration, $$(datatable.id));
                await datatable.loadSorties(); */ //faire une datatable d'examens
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'un examen",
                    type: 'alert-error',
                });
            });
    }

    async insertAssisA(assis_a){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertAssisA", JSON.stringify(assis_a))
            .then(async data => {
                webix.message({type: "success", text: "Donnée inséré"});
                /*  webix.ui(datatable.configuration, $$(datatable.id));
                  await datatable.loadSorties(); */ //faire une datatable d'examens
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'une donnée",
                    type: 'alert-error',
                });
            });
    }

    async insertEtudiant(etudiant){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertEtudiant", JSON.stringify(etudiant))
            .then(async data => {
                webix.message({type: "success", text: "Donnée inséré"});
                /*  webix.ui(datatable.configuration, $$(datatable.id));
                  await datatable.loadSorties(); */ //faire une datatable d'examens
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'un étudiant",
                    type: 'alert-error',
                });
            });
    }

    async insertLocal(local){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertLocal", JSON.stringify(local))
            .then(async data => {
                webix.message({type: "success", text: "Donnée inséré"});
                /*  webix.ui(datatable.configuration, $$(datatable.id));
                  await datatable.loadSorties(); */ //faire une datatable d'examens
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'un local",
                    type: 'alert-error',
                });
            });
    }

    async insertPlace(place){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertPlace", JSON.stringify(place))
            .then(async data => {
                webix.message({type: "success", text: "Donnée inséré"});
                /*  webix.ui(datatable.configuration, $$(datatable.id));
                  await datatable.loadSorties(); */ //faire une datatable d'examens
            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Erreur',
                    text: "Problème lors de l'insertion d'une place",
                    type: 'alert-error',
                });
            });
    }

    async insertSorties(sortie){
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Donnée inséré"});
                /*  webix.ui(datatable.configuration, $$(datatable.id));
                  await datatable.loadSorties(); */ //faire une datatable d'examens
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