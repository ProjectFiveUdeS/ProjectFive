import { datatableTermine } from "./ui/datatable.js";
import { toolbar } from "./ui/toolbar.js";

export const config = new class Config {

    get id() {
        return "config";
    }

    get configuration() {
        return {
            view: "window",
            id: this.id,
            modal: true,
            move: true,
            position: "center",
            dynamic: true,
            head: false,
            body: {
                paddingX: 10,
                paddingY: 10,
                rows: [{
                    view: "toolbar",
                    id: "configtoolbar",
                    paddingY: 1,
                    height: 25, elements: [
                        {},
                        {
                            view: "icon", id: 'help1', tooltip: 'Aide', icon: 'mdi mdi-help-circle-outline',
                            click: () => {
                                const node = $$('help1').getNode();
                                webix.ui({
                                    view: "popup",
                                    dynamic: true,
                                    head: false,
                                    body: {view: "template", width: 500, height: 300, src: "help.html"}
                                }).show(node);
                            }
                        }
                    ]
                },[
                    {
                        view: "fieldset",
                        label: "configuration",
                        width: 600,
                        body: {
                            view: "form",
                            margin: 0,
                            padding: 0,
                            id: "configform",
                            borderless: true,
                            scroll: false,
                            elements: [
                                {
                                    view: "text",
                                    id: "type_sortie",
                                    name: "type sortie",
                                    label: "Type de sortie",
                                    labelWidth: 280,
                                    inputWidth: 375,
                                },
                                {
                                    view: "text",
                                    id: "cip",
                                    name: "cip",
                                    label: "CIP de l'étudiant",
                                    labelWidth: 280,
                                    inputWidth: 500,
                                },
                                {
                                    view: "datepicker",
                                    id: "debut",
                                    name: "debut",
                                    label:"Début de la sortie",
                                    labelWidth: 280,
                                    inputAlign: "right",
                                    inputWidth: 450,
                                },
                                {
                                    view: "datepicker",
                                    id: "fin",
                                    label: "Fin de la sortie",
                                    name: "fin",
                                    labelWidth: 280,
                                    inputAlign: "right",
                                    inputWidth: 450,
                                },


                                {
                                    container: "button",
                                    padding: 20,
                                    cols: [
                                        {},
                                        {
                                            view: "button",
                                            id: "cancel",
                                            label: "Annuler",
                                            width: 110,
                                            icon: "mdi  mdi-48px mdi-content-save-settings-outline",
                                            click: () => $$(this.id).close(),
                                        },
                                        {
                                            view: "button",
                                            id: "apply",
                                            label: "Ajouter sortie",
                                            width: 110,
                                            icon: "mdi  mdi-48px mdi-content-save-settings-outline",
                                            disabled: true,  //c'est la raison pour laquelle  c'est grisé
                                            click: () => {
                                                const sortie = {
                                                    type_sortie: $$("type_sortie").getValue(),
                                                    heure_debut: $$("debut").getValue(),
                                                    heure_fin: $$("fin").getValue(),
                                                    cip: $$("cip").getValue(),
                                                };
                                                this.insertSortie(sortie);
                                            }
                                        }]
                                }
                            ],
                            elementsConfig: {
                                labelAlign: "right",
                                labelWidth: 140,
                                on: {
                                    "onChange": function (newv, oldv) {
                                        $$("apply").enable();
                                    }
                                },
                            },
                        }
                    }]]
            },
        }
    }

    show() {
        $$("apply").disable();
        $$("config").show();
    }

};



