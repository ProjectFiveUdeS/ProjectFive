package ca.usherbrooke.gegi.server.business;

public class etudiant {
    private String cip;
    private String nom;
    private String prenom;
    private boolean adapte;

    public boolean isAdapte() {
        return adapte;
    }

    public void setAdapte(boolean adapte) {
        this.adapte = adapte;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getCip() {
        return cip;
    }

    public void setCip(String cip) {
        this.cip = cip;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Etudiant{" +
                "cip=" + cip +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", adapte='" + adapte + '\'' +
                '}';
    }
}
