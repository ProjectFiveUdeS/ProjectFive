import {layoutPagePrincipale} from "./ui/layoutPageSurveillant.js";
import {Clock} from "./clock.js";

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
        webix.ui(layoutPagePrincipale.configuration);  // établi les grandes lignes de l'interface usager
        let clock = new Clock();
        setInterval(()=>clock.updateClock(),30000); //Si on ne met pas un long délai, toujours refresh
    }
)();