import {datatable} from "./datatable.js";
import {layout} from "./layout.js";
import {Clock} from "./clock.js"
import {surveillant} from "./surveillant.js";
import {config} from "./config.js";

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
        webix.extend($$("main"), webix.ProgressBar);  //Met en place une barre d'information pour la sauvegarde
        const parameters = Object.fromEntries(new URLSearchParams(window.location.search)) // va chercher les parametres du URL
        await datatable.loadSorties(); //initialize les données à partir de service rest
        let surv = new surveillant();
        let clock = new Clock();
        const sortie = {
            type_sortie: 0,
            heure_debut: "00:00:00",
            heure_fin: "05:00:00",
            cip: "girm1235"
        }
        await config.insertSortie(sortie);
        setInterval(()=>clock.updateClock(),1000);
    }
)();
