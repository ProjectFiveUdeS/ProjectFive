export const datatableSurveillant = new class Datatable {


    get id() {
        return "teamSurveillant";
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
                    id: "idSurveillant",
                    header: "Id",
                    hidden: false,
                },
                {
                    id: "nom",
                    header: "Nom",
                    width: 150,
                    tooltip: "Nom",
                    hidden: false,
                },
                {
                    id: "prenom",
                    header: "Prénom",
                    hidden: false,
                    width: 100,
                    fillspace: true,
                }
            ],
        }
    }

    async load(){
        $$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/tousSurveillant")
            .then(data => data.json())
            .then(data => {
                $$(datatableSurveillant.id).clearAll();
                $$(datatableSurveillant.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir le surveillant',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }
}