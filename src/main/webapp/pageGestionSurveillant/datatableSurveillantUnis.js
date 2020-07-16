export const datatableSurveillantUnis = new class Datatable {


    get id() {
        return "teamSurveillantUnis";
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
                    width: 100,
                    height:70,
                    hidden: false,
                },
                {
                    id: "nom",
                    header: "Nom",
                    width: 130,
                    height:70,
                    hidden: false,
                },
                {
                    id: "prenom",
                    header: "Prénom",
                    hidden: false,
                    width: 130,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "idCoursExamen",
                    header: "Id cours examen",
                    width: 300,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "numeroLocal",
                    header: "Numéro local",
                    width: 300,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "dateExamen",
                    header: "Date examen",
                    width: 300,
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
            .get("../api/tousSurveillantUnis")
            .then(data => data.json())
            .then(data => {
                $$(datatableSurveillantUnis.id).clearAll();
                $$(datatableSurveillantUnis.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir le surveillant unis',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }
}