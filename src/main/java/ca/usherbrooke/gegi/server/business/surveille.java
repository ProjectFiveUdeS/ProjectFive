package ca.usherbrooke.gegi.server.business;

public class surveille {
    private String idSurveillant;
    private String idCoursExamen;
    private String numeroLocal;
    private String dateExamen;
    private boolean adapte;

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

    public boolean isAdapte(){
        return adapte;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"id_surveillant\":\"" + idSurveillant + "\"" +
                ", \"id_cours_examen\":\"" + idCoursExamen + "\"" +
                ", \"numero_local\":\"" + numeroLocal + "\"" +
                ", \"date_examen\":\"" + dateExamen + "\"" +
                ", \"adapte\":\"" + adapte +
                '}';
    }
}
