export const buttonAddSortie = new class buttonAddSortieClass {

    getViewID() {
        return "button"
    }

    get configuration() {
        return {
            view: this.getViewID(),
            id: "buttonAddSortieClass",
            value: "Page surveillant",
            css: "webix_primary",
            width: 125,
            height: 125,
            align: "center",
            href:"http://localhost:8080/ProjectFive/pageSurveillant/",
            click: async function (id, event) {
                window.open(this.config.href);
            }
        }
    }
}