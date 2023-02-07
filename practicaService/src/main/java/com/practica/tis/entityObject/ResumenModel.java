package com.practica.tis.entityObject;

import java.util.List;

public class ResumenModel {
    private static final long serialVersionUID = 234122996006267687L;
    private List<ResultModel> resultados;
    private float ganInversion;
    private float montoFinal;

    public ResumenModel(){ }

    public List<ResultModel> getResultados() {
        return resultados;
    }

    public void setResultados(List<ResultModel> resultados) {
        this.resultados = resultados;
    }

    public float getGanInversion() {
        return ganInversion;
    }

    public void setGanInversion(float ganInversion) {
        this.ganInversion = ganInversion;
    }

    public float getMontoFinal() {
        return montoFinal;
    }

    public void setMontoFinal(float montoFinal) {
        this.montoFinal = montoFinal;
    }
}
