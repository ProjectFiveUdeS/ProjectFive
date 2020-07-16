import {datatableExamen} from "./datatableExamen.js";
import {datatableSurveille} from "./datatableSurveille.js";
import {datatableSurveillant} from "./datatableSurveillant.js";
import {datatableSurveillantUnis} from "./datatableSurveillantUnis.js";
import {datatableEtudiant} from "./datatableEtudiant.js";
import {layoutPrincipal} from "./layoutPrincipal.js";

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
        webix.ui(layoutPrincipal.configuration);  // établi les grandes lignes de l'interface usager
        webix.extend($$("main"), webix.ProgressBar);  //Met en place une barre d'information pour la sauvegarde
        const parameters = Object.fromEntries(new URLSearchParams(window.location.search)) // va chercher les parametres du URL
        await datatableSurveillant.load(); //initialize les données à partir de service rest
        await datatableExamen.load();
        await datatableSurveillantUnis.load();


        // let surv = new surveillant();
       // let gest = new Gestion();
       // let clock = new Clock();
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
        //await config.insertSortie(sortie);
        //await surv.selectExamen("gen280");
        //await gest.insertLocal(local);
        //clock.setLabel(surv.getDebut());
        //surv.getFin();
       // setInterval(()=>clock.updateClock(),1000);
    }
)();
