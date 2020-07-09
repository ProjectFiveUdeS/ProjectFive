export const examenText = new class textExamen{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textExamen",
            value:"",
            label:"ID de l'examen"
        }
    }

    async selectExamen(idCoursExamen) {
        let idCours = {
            idCoursExamen: idCoursExamen
        }
        return webix.ajax()
            .headers({"Content-Type": "application/json"})
            .get("api/examen", idCours)
            .then(data => data.json())
            .catch((reason) => {
                console.error(reason);
            });
    }
}