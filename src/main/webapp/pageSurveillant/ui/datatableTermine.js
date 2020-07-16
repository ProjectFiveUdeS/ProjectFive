export const datatableTermine = new class Datatable {


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
                    header: "CIP",
                    hidden: false,
                    width: 200,
                    fillspace: true,
                },
                                {
                    id: "heure_debut",
                    header: "Heure de Sortie",
                    width: 200,
                    fillspace: true,
                }
            ],
        }
    }

    async loadSorties() {
        //$$("main").showProgress({type: 'top'});
        let cip = {cip:"girm1235"}
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/etudiant", cip)
            .then(data => data.json())
            .then(data => {
                $$(datatableTermine.id).clearAll();
                $$(datatableTermine.id).parse(data);
                //$$("main").hideProgress();

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