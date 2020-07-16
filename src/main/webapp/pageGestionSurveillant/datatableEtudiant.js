export const datatableEtudiant = new class Datatable {


    get id() {
        return "teamExamen";
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
                    header: "CIP",
                    width: 100,
                    height:70,
                    hidden: false,
                },
                {
                    id: "nom",
                    header: "Nom",
                    hidden: false,
                    width: 70,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "prenom",
                    header: "Prenom",
                    width: 70,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "adapte",
                    header: "Adapté(e)",
                    width: 70,
                    height:70,
                    fillspace: true,
                }
            ],
        }
    }

    async load(){
        $$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/etudiants")
            .then(data => data.json())
            .then(data => {
                $$(datatableEtudiant.id).clearAll();
                $$(datatableEtudiant.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir les etudiant(e)s',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }
}