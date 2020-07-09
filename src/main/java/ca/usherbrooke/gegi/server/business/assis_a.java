package ca.usherbrooke.gegi.server.business;

public class assis_a {
    private String cip;
    private boolean presence;
    private String numeroLocal;
    private String idCoursExamen;

    public boolean isPresence() {
        return presence;
    }

    public void setPresence(boolean p){
        presence = p;
    }

    public String getCip() {
        return cip;
    }

    public void setCip(String c){
        cip = c;
    }

    public String getIdDoursExamen() {
        return idCoursExamen;
    }

    public void setIdCoursExamen(String i){
        idCoursExamen = i;
    }

    public String getNumeroLocal() {
        return numeroLocal;
    }

    public void setNumeroLocal(String s){
        numeroLocal = s;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"cip\":\"" + cip + "\"" +
                ", \"presence\":\"" + presence + "\"" +
                ", \"numero_local\":\"" + numeroLocal + "\"" +
                ", \"id_cours_examen\":" + idCoursExamen +
                '}';
    }
}
