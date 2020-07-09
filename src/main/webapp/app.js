import {datatable} from "./datatable.js";
import {layout} from "./layout.js";
import {Clock} from "./clock.js"
//import {toolbarSurveillant} from "./surveillant.js";
import {Gestion} from "./gestion.js";
import {examenText} from "./textExamen.js";

webix.attachEvent(
    'onAjaxError',
    async (status) => {
        switch (status) {
            case 0:
                webix.modalbox({
                    title: 'Session expirée',
                    text: 'Redirection en cours...',
                    type: 'alert-error',
                });
                await sleep(2000);
                window.location.reload();
                break;
            case 500:
                webix.message({
                    type: 'error',
                    text: 'Un problème serveur est survenu',
                });
                break;
        }
    },
);

(async () => {
        webix.i18n.setLocale('fr-FR');   // set notation
        webix.ui(layout.configuration);  // établi les grandes lignes de l'interface usager
        //webix.extend($$("main"), webix.ProgressBar);  //Met en place une barre d'information pour la sauvegarde
        //const parameters = Object.fromEntries(new URLSearchParams(window.location.search)) // va chercher les parametres du URL
        //await datatable.loadSorties(); //initialize les données à partir de service rest
        //let surv = new surveillant();
        let gest = new Gestion();
        let clock = new Clock();
        /*const sortie = {
            type_sortie: 0,
            heure_debut: "2020-12-15 00:00:00",
            heure_fin: "2020-12-15 05:00:00",
            cip: "girm1235"
        }
        const local = {
            numero_local: "5555",
            nombre_places: 58,
            description_local: "test"
        }*/
        //await gest.insertSortie(sortie);
        //await surv.selectExamen("gen280");
        //await gest.insertLocal(local);
        //clock.setLabel(surv.getDebut());
        //surv.getFin();
        //datatable.loadSorties();
        /*const exam = {
            idCoursExamen: "gif210",
            nbrEtudiantsPrevu: 40,
            nbrEtudiantsPresents: 30,
            debut: "2020-07-08 20:00:00",
            debutAdapte: "2020-07-08 20:00:00",
            tiersTemps:"2020-07-08 21:00:00",
            tiersTempsAdapte:"2020-07-08 21:20:00",
            fin: "2020-07-08 23:00:00",
            finAdapte:"2020-07-08 00:00:00",
            dateExamen: "2020-07-08"
        }*/
        //await gest.insertExamen(exam);
        setInterval(()=>clock.updateClock(),1000);
        $$("slider").resize(100);
    }
)();