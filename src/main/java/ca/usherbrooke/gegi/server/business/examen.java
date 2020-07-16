package ca.usherbrooke.gegi.server.business;

public class examen {
    private String idCoursExamen;
    private int nbrEtudiantsPrevu;
    private int nbrEtudiantsPresents;
    private String debut;
    private String tiersTemps;
    private String tiersTempsAdapte;
    private String fin;
    private String finAdapte;
    private String dateExamen;

    public String getIdCoursExamen(){
        return idCoursExamen;
    }

    public int getNbrEtudiantsPrevu(){
        return nbrEtudiantsPrevu;
    }

    public int getNbrEtudiantsPresents(){
        return nbrEtudiantsPresents;
    }

    public String getDebut(){
        return debut;
    }

    public String getTiersTemps(){
        return tiersTemps;
    }

    public String getTiersTempsAdapte(){
        return tiersTempsAdapte;
    }

    public String getFin(){
        return fin;
    }

    public String getFinAdapte(){
        return finAdapte;
    }

    public String getDateExamen() {
        return dateExamen;
    }

    public void setDebut(String debut) {
        this.debut = debut;
    }

    public void setId_cours_examen(String id_cours_examen) {
        this.idCoursExamen = id_cours_examen;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    public void setNbr_etudiants_presents(int nbr_etudiants_presents) {
        this.nbrEtudiantsPresents = nbr_etudiants_presents;
    }

    public void setNbr_etudiants_prevu(int nbr_etudiants_prevu) {
        this.nbrEtudiantsPrevu = nbr_etudiants_prevu;
    }

    public void setFin_adapte(String fin_adapte) {
        this.finAdapte = fin_adapte;
    }

    public void setTiers_temps(String tiers_temps) {
        this.tiersTemps = tiers_temps;
    }

    public void setTiers_temps_adapte(String tiers_temps_adapte) {
        this.tiersTempsAdapte = tiers_temps_adapte;
    }

    public void setDate_examen(String date_examen) {
        this.dateExamen = date_examen;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"id_cours_examen\":\"" + idCoursExamen + "\"" +
                ", \"nbr_etudiants_prevu\":\"" + nbrEtudiantsPrevu + "\"" +
                ", \"nbr_etudiants_presents\":\"" + nbrEtudiantsPresents + "\"" +
                ", \"debut\":" + debut + "\"" + ", \"fin\":\"" + fin + "\"" + ", \"fin_adapte\":"
                + finAdapte + "\"" + ", \"tiers_temps\":\"" + tiersTemps + "\"" + ", \"tiers_temps_adapte\":"
                + tiersTempsAdapte + "\"" + ", \"date_examen\":\"" + dateExamen +
                '}';
    }
}
