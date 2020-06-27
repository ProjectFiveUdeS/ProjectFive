


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
                    id: "cip",
                    header: "CIP_Étudiant",
                    width: 75,
                    tooltip: "CIP_Étudiant",
                    hidden: false,
                },
                {
                    id: "prenom",
                    header: "Prénom",
                    hidden: false,
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "nom",
                    header: "Nom de Famille",
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "adapte",
                    header: "Mesures Adaptées",
                    width: 300,
                    fillspace: true,
                },
            ],
        }
    }

    async loadEtudiant() {
        $$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/etudiant")
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