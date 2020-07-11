package ca.usherbrooke.gegi.server.business;

public class surveillant {
    private String nom;
    private String prenom;
    private int idSurveillant;

    public String getNom(){
        return nom;
    }

    public String getPrenom(){
        return prenom;
    }

    public int getIdSurveillant(){
        return idSurveillant;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"nom\":\"" + nom + "\"" +
                ", \"prenom\":\"" + prenom + "\"" +
                ", \"id_surveillant\":\"" + idSurveillant +
                '}';
    }
}
