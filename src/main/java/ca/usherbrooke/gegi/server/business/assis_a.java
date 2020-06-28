package ca.usherbrooke.gegi.server.business;

public class assis_a {
    private String cip;
    private boolean presence;
    private String numero_local;
    private String id_cours_examen;

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

    public String getId_cours_examen() {
        return id_cours_examen;
    }

    public void setId_cours_examen(String i){
        id_cours_examen = i;
    }

    public String getNumero_local() {
        return numero_local;
    }

    public void setNumero_local(String s){
        numero_local = s;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"cip\":\"" + cip + "\"" +
                ", \"presence\":\"" + presence + "\"" +
                ", \"numero_local\":\"" + numero_local + "\"" +
                ", \"id_cours_examen\":" + id_cours_examen +
                '}';
    }
}
