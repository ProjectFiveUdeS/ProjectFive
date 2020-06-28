package ca.usherbrooke.gegi.server.business;

public class sorties {
    private int id_sortie;
    private int type_sortie;
    private String heure_debut;
    private String heure_fin;
    private String cip;

    public String getCip() {
        return cip;
    }

    public int getId_sortie() {
        return id_sortie;
    }

    public int getType_sortie() {
        return type_sortie;
    }

    public String getHeure_debut() {
        return heure_debut;
    }

    public String getHeure_fin() {
        return heure_fin;
    }

    public void setCip(String cip) {
        this.cip = cip;
    }

    public void setHeure_debut(String heure_debut) {
        this.heure_debut = heure_debut;
    }

    public void setHeure_fin(String heure_fin) {
        this.heure_fin = heure_fin;
    }

    public void setId_sortie(int id_sortie) {
        this.id_sortie = id_sortie;
    }

    public void setType_sortie(int type_sortie) {
        this.type_sortie = type_sortie;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"type_sortie\":\"" + type_sortie + "\"" +
                ", \"id_sortie\":\"" + id_sortie + "\"" +
                ", \"heure_debut\":\"" + heure_debut + "\"" +
                ", \"heure_fin\":\"" + heure_fin + "\"" +
                ", \"cip\":\"" + cip + "\"" +
                '}';
    }
}
