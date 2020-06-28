package ca.usherbrooke.gegi.server.business;

public class place {
    private String numero_local;
    private int numero_chaise;

    public String getNumero_local() {
        return numero_local;
    }

    public int getNumero_chaise() {
        return numero_chaise;
    }

    public void setNumero_local(String numero_local) {
        this.numero_local = numero_local;
    }

    public void setNumero_chaise(int numero_chaise) {
        this.numero_chaise = numero_chaise;
    }

    //si c'est un variable string ou semblable il faut ajouter des guillemets ""
    @Override
    public String toString() {
        return "{" +
                "\"numero_local\":\"" + numero_local + "\"" +
                ", \"numero_chaise\":\"" + numero_chaise + "\"" +
                '}';
    }
}
