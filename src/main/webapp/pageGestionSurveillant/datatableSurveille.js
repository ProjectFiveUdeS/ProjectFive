export const datatableSurveille = new class Datatable {


    get id() {
        return "teamSurveille";
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
                    id: "idCoursExamen",
                    header: "Id cours examen",
                    width: 100,
                    fillspace: true,
                },
                {
                    id: "numeroLocal",
                    header: "Numéro local",
                    width: 100,
                    fillspace: true,
                },
                {
                    id: "dateExamen",
                    header: "Date examen",
                    width: 100,
                    fillspace: true,
                }
            ],
        }
    }

    async loadSurveille(){
        $$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/tousSurveille")
            .then(data => data.json())
            .then(data => {
                $$(datatableSurveille.id).clearAll();
                $$(datatableSurveille.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir le surveille',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }
}