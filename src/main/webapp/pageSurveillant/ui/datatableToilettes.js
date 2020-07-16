export const datatableToilettes = new class Datatable {


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
                    id: "heureDebut",
                    header: "Heure du départ",
                    width: 200,
                    fillspace: true,
                },
                {
                    id: "heureFin",
                    header: "Heure du retour",
                    width: 200,
                    fillspace: true,
                }
            ],
        }
    }

    async loadSorties() {
        //$$("main").showProgress({type: 'top'});
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/sortiesToilettesSurveillant")
            .then(data => data.json())
            .then(data => {
                $$(datatableToilettes.id).clearAll();
                $$(datatableToilettes.id).parse(data);
                //$$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
            });
    }
}