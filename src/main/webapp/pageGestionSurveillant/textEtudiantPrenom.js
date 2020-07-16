export const textEtudiantPrenom = new class prenomEtudiant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textEtudiantPrenom",
            value:"prenom etudiant",
            label:"Prenom",
            labelWidth: 'auto'
        }
    }
}