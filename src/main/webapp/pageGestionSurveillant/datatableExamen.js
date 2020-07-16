export const datatableExamen = new class Datatable {


    get id() {
        return "teamExamen";
    }

    get configuration() {
        return {
            view: "datatable",
            id: this.id,
            hidden: false,
            tooltip: true,
            /*
            autowidth: true,
            width: 500,
            height: 500,*/
            data: [],
            columns: [
                {
                    id: "idCoursExamen",
                    header: "Id de l'examen",
                    width: 70,
                    height:70,
                    hidden: false,
                },
                {
                    id: "debut",
                    header: "Début de l'examen",
                    hidden: false,
                    width: 70,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "fin",
                    header: "Fin de l'examen",
                    width: 70,
                    height:70,
                    fillspace: true,
                },
                {
                    id: "dateExamen",
                    header: "Date de l'examen",
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
            .get("../api/examens")
            .then(data => data.json())
            .then(data => {
                $$(datatableExamen.id).clearAll();
                $$(datatableExamen.id).parse(data);
                $$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
                webix.modalbox({
                    title: 'Voir les examens',
                    text: "Paramètres inconsistants pour accéder à la base de données de présence",
                    type: 'alert-error',
                });
            });
    }

    /*async loadSorties() {
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
    }*/
}