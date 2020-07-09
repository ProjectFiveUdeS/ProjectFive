package ca.usherbrooke.gegi.server.business;

public class place {
    private String numeroLocal;
    private int numeroChaise;

    public String getNumeroLocal() {
        return numeroLocal;
    }

    public int getNumeroChaise() {
        return numeroChaise;
    }

    public void setNumero_local(String numero_local) {
        this.numeroLocal = numero_local;
    }

    public void setNumeroChaise(int numero_chaise) {
        this.numeroChaise = numero_chaise;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"numero_local\":\"" + numeroLocal + "\"" +
                ", \"numero_chaise\":" + numeroChaise +
                '}';
    }
}
