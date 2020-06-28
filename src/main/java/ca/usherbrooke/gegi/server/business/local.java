package ca.usherbrooke.gegi.server.business;

public class local {
    private String numero_local;
    private int nombre_places;
    private String description_local;

    public String getNumero_local() {
        return numero_local;
    }

    public String getDescription_local() {
        return description_local;
    }

    public int getNombre_places() {
        return nombre_places;
    }

    public void setDescription_local(String description_local) {
        this.description_local = description_local;
    }

    public void setNombre_places(int nombre_places) {
        this.nombre_places = nombre_places;
    }

    public void setNumero_local(String numero_local) {
        this.numero_local = numero_local;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"numero_local\":\"" + numero_local + "\"" +
                ", \"nombre_places\":\"" + nombre_places + "\"" +
                ", \"description_local\":\"" + description_local + "\"" +
                '}';
    }
}
