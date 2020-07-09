package ca.usherbrooke.gegi.server.business;

public class local {
    private String numeroLocal;
    private int nombrePlaces;
    private String descriptionLocal;

    public String getNumeroLocal() {
        return numeroLocal;
    }

    public String getDescriptionLocal() {
        return descriptionLocal;
    }

    public int getNombrePlaces() {
        return nombrePlaces;
    }

    public void setDescriptionLocal(String description_local) {
        this.descriptionLocal = description_local;
    }

    public void setNombrePlaces(int nombre_places) {
        this.nombrePlaces = nombre_places;
    }

    public void setNumeroLocal(String numero_local) {
        this.numeroLocal = numero_local;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"numero_local\":\"" + numeroLocal + "\"" +
                ", \"nombre_places\":\"" + nombrePlaces + "\"" +
                ", \"description_local\":\"" + descriptionLocal +
                '}';
    }
}
