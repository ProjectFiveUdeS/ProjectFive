package ca.usherbrooke.gegi.server.business;

public class surveille {
    private int idSurveillant;
    private String idCoursExamen;
    private String numeroLocal;
    private String dateExamen;

    public int getIdSurveillant(){
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

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"id_surveillant\":\"" + idSurveillant + "\"" +
                ", \"id_cours_examen\":\"" + idCoursExamen + "\"" +
                ", \"numero_local\":\"" + numeroLocal + "\"" +
                ", \"date_examen\":\"" + dateExamen +
                '}';
    }
}