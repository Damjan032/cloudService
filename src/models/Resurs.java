package models;

public abstract class Resurs {
    private String id;

    private String ime;


    public Resurs(String id, String ime) {
        this.id = id;
        this.ime = ime;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
