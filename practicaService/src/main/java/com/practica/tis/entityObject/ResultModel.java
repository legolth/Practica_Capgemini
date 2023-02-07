package com.practica.tis.entityObject;

public class ResultModel {
    private static final long serialVersionUID = 234122996006267687L;
    private int anio;
    private float salIni;
    private float aport;
    private float rendim;
    private float salFinal;

    public ResultModel(){ }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public float getSalIni() {
        return salIni;
    }

    public void setSalIni(float salIni) {
        this.salIni = salIni;
    }

    public float getAport() {
        return aport;
    }

    public void setAport(float aport) {
        this.aport = aport;
    }

    public float getRendim() {
        return rendim;
    }

    public void setRendim(float rendim) {
        this.rendim = rendim;
    }

    public float getSalFinal() {
        return salFinal;
    }

    public void setSalFinal(float salFinal) {
        this.salFinal = salFinal;
    }
}
