export const datatableTermine = new class Datatable {


    get id() {
        return "datatableTermine";
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
                    header: "Heure de Sortie",
                    width: 200,
                    fillspace: true,
                }
            ],
        }
    }

    async loadSorties() {
        let ajd = new Date().toLocaleDateString();
        let annee = ajd.split('/')[2];
        let mois = ajd.split('/')[0];
        let jour = ajd.split('/')[1];
        jour = (jour < 10 ? "0" : "") + jour;
        mois = (mois < 10 ? "0" : "") + mois;
        let ajd2 = annee + "-" + mois + "-" + jour;
        const surveille = await datatableTermine.selectSurveille($$("textSelectionSurveillant").getValue(), ajd2)
        const surveille2 = surveille[0];
        const envoi = {
            idCoursExamen: surveille2.idCoursExamen,
            dateExamen: ajd2
        }
        console.log(envoi.idCoursExamen);
        console.log(envoi.dateExamen);
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/sortiesFin", envoi)
            .then(data => data.json())
            .then(data => {
                $$(datatableTermine.id).clearAll();
                $$(datatableTermine.id).parse(data);
                //$$("main").hideProgress();

            })
            .catch((reason) => {
                console.error(reason);
            });
    }

    async selectSurveille(idSurveillant, dateExamen){
        const envoi = {
            idSurveillant: idSurveillant,
            dateExamen: dateExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("../api/surveille", envoi)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }
}