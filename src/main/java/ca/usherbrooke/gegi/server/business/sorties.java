package ca.usherbrooke.gegi.server.business;

public class sorties {
    private int idSortie;
    private int typeSortie;
    private String heureDebut;
    private String heureFin;
    private String cip;

    public String getCip() {
        return cip;
    }

    public int getIdSortie() {
        return idSortie;
    }

    public int getTypeSortie() {
        return typeSortie;
    }

    public String getHeureDebut() {
        return heureDebut;
    }

    public String getHeureFin() {
        return heureFin;
    }

    public void setCip(String cip) {
        this.cip = cip;
    }

    public void setHeure_debut(String heure_debut) {
        this.heureDebut = heure_debut;
    }

    public void setHeure_fin(String heure_fin) {
        this.heureFin = heure_fin;
    }

    public void setId_sortie(int id_sortie) {
        this.idSortie = id_sortie;
    }

    public void setType_sortie(int type_sortie) {
        this.typeSortie = type_sortie;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"type_sortie\":\"" + typeSortie + "\"" +
                ", \"id_sortie\":\"" + idSortie + "\"" +
                ", \"heure_debut\":\"" + heureDebut + "\"" +
                ", \"heure_fin\":\"" + heureFin + "\"" +
                ", \"cip\":\"" + cip + "\"" +
                '}';
    }
}
