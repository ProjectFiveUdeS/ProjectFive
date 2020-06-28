package ca.usherbrooke.gegi.server.business;

public class examen {
    private String id_cours_examen;
    private int nbr_etudiants_prevu;
    private int nbr_etudiants_presents;
    private String debut;
    private String debut_adapte;
    private String tiers_temps;
    private String tiers_temps_adapte;
    private String fin;
    private String fin_adapte;
    private String date_examen;

    public String getId_cours_examen(){
        return id_cours_examen;
    }

    public int getNbr_etudiants_prevu(){
        return nbr_etudiants_prevu;
    }

    public int getNbr_etudiants_presents(){
        return nbr_etudiants_presents;
    }

    public String getDebut(){
        return debut;
    }

    public String getDebut_adapte(){
        return debut_adapte;
    }

    public String getTiers_temps(){
        return tiers_temps;
    }

    public String getTiers_temps_adapte(){
        return tiers_temps_adapte;
    }

    public String getFin(){
        return fin;
    }

    public String getFin_adapte(){
        return fin_adapte;
    }

    public String getDate_examen() {
        return date_examen;
    }

    public void setDebut(String debut) {
        this.debut = debut;
    }

    public void setDebut_adapte(String debut_adapte) {
        this.debut_adapte = debut_adapte;
    }

    public void setId_cours_examen(String id_cours_examen) {
        this.id_cours_examen = id_cours_examen;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    public void setNbr_etudiants_presents(int nbr_etudiants_presents) {
        this.nbr_etudiants_presents = nbr_etudiants_presents;
    }

    public void setNbr_etudiants_prevu(int nbr_etudiants_prevu) {
        this.nbr_etudiants_prevu = nbr_etudiants_prevu;
    }

    public void setFin_adapte(String fin_adapte) {
        this.fin_adapte = fin_adapte;
    }

    public void setTiers_temps(String tiers_temps) {
        this.tiers_temps = tiers_temps;
    }

    public void setTiers_temps_adapte(String tiers_temps_adapte) {
        this.tiers_temps_adapte = tiers_temps_adapte;
    }

    public void setDate_examen(String date_examen) {
        this.date_examen = date_examen;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"id_examen\":\"" + id_cours_examen + "\"" +
                ", \"nbr_etudiants_prevu\":\"" + nbr_etudiants_prevu + "\"" +
                ", \"nbr_etudiants_presents\":\"" + nbr_etudiants_presents + "\"" +
                ", \"debut\":" + debut + "\"" + ", \"debut_adapte\":" +
                debut_adapte + "\"" + ", \"fin\":\"" + fin + "\"" + ", \"fin_adapte\":"
                + fin_adapte + "\"" + ", \"tiers_temps\":\"" + tiers_temps + "\"" + ", \"tiers_temps_adapte\":"
                + tiers_temps_adapte + "\"" + ", \date_examen\":\"" + date_examen +
                '}';
    }
}
