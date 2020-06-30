export const datatable = new class Datatable {


    get id() {
        return "team";
    }

    get configuration() {
        return {
            view: "datatable",
            id: this.id,
            hidden: false,
            tooltip: true,
            data: [],
            columns: [
                {
                    id: "id_sortie",
                    header: "Numéro sortie",
                    width: 75,
                    tooltip: "Numéro sortie",
                    hidden: false,
                },
                {
                    id: "type_sortie",
                    header: "Type de sortie",
                    hidden: false,
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "heure_debut",
                    header: "Début sortie",
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "heure_fin",
                    header: "Fin sortie",
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "cip",
                    header: "CIP",
                    width: 200,
                    fillspace: true,
                }
            ],
        }
    }

    async loadSorties() {
        $$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/toutesSorties")
            .then(data => data.json())
            .then(data => {
                $$(datatable.id).clearAll();
                $$(datatable.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir des étudiants',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }
}