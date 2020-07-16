export const buttonSortie = new class Sortie{

    getViewID(){
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonSortie",
            value: "Insérer Sortie",
            css: "webix_primary",
            inputWidth: 150,
            click: function (id, event) {
                let ajd = new Date().toLocaleDateString();
                let annee = ajd.split('/')[2];
                let mois = ajd.split('/')[0];
                let jour = ajd.split('/')[1];
                jour = (jour < 10 ? "0" : "") + jour;
                mois = (mois < 10 ? "0" : "") + mois;
                let ajd2 = annee + "-" + mois + "-" + jour;
                let typeSortieVar
                if($$("typeSortieChooser").getValue() == "Toilettes"){
                    typeSortieVar = 1;
                }
                else
                {
                    typeSortieVar = 0;
                }
                    const sortie = {
                        typeSortie: typeSortieVar,
                        heureDebut: "2020-07-08 08:00:00",
                        heureFin: "2020-07-08 08:15:00",
                        cip: $$("textCipSortie").getValue(),
                        idCoursExamen: "gen280",
                        dateExamen: ajd2
                        //idCoursExamen: $$("textExamen").getValue()
                    }
                console.log(new Date().getTime());
                buttonSortie.insertSortie(sortie);
            }
        }
    }

    async insertSortie(sortie) {
        webix
            .ajax()
            .headers({"Content-Type": "application/json"})
            .put("../api/insertSorties", JSON.stringify(sortie))
            .then(async data => {
                webix.message({type: "success", text: "Sortie insérée"});
            })
            .catch((reason) => {
                console.error(reason);
            });
    }
}