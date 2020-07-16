package ca.usherbrooke.gegi.server.business;

public class surveillantUnis {
    private String nom;
    private String prenom;
    private String idSurveillant;
    private String idCoursExamen;
    private String numeroLocal;
    private String dateExamen;
    private boolean adapte;

    public boolean isAdapte(){
        return adapte;
    }

    public String getIdSurveillant(){
        return idSurveillant;
    }

    public String getIdCoursExamen(){
        return idCoursExamen;
    }

    public String getNumeroLocal(){
        return numeroLocal;
    }

    public String getDateExamen(){
        return dateExamen;
    }

    public String getNom(){
        return nom;
    }

    public String getPrenom(){
        return prenom;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"nom\":\"" + nom + "\"" +
                ", \"prenom\":\"" + prenom + "\"" +
                ", \"id_surveillant\":\"" + idSurveillant + "\"" +
                ", \"id_cours_examen\":\"" + idCoursExamen + "\"" +
                ", \"numero_local\":\"" + numeroLocal + "\"" +
                ", \"date_examen\":\"" + dateExamen +
                '}';
    }
}
