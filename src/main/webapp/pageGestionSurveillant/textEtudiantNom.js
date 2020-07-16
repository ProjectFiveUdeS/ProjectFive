export const textEtudiantNom = new class nomEtudiant{

    getViewID(){
        return "text"
    }

    get configuration(){
        return{
            view:this.getViewID(),
            id: "textEtudiantNom",
            value:"nom etudiant",
            label:"Nom",
            labelWidth: 'auto'
        }
    }
}