package com.practica.tis.entityObject;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.GetMapping;

import javax.annotation.processing.Generated;
public class EntradaModel {
    private static final long serialVersionUID = 234122996006267687L;
   private float invIni;
    private float aportA;
    private float pincrPA;
    private float anioInv;
    private float rendim;

    public EntradaModel(){}

    public float getInvIni() {
        return invIni;
    }

    public void setInvIni(float invIni) {
        this.invIni = invIni;
    }

    public float getAportA() {
        return aportA;
    }

    public void setAportA(float aportA) {
        this.aportA = aportA;
    }

    public float getPincrPA() {
        return pincrPA;
    }

    public void setPincrPA(float pincrPA) {
        this.pincrPA = pincrPA;
    }

    public float getAnioInv() {
        return anioInv;
    }

    public void setAnioInv(float anioInv) {
        this.anioInv = anioInv;
    }

    public float getRendim() {
        return rendim;
    }

    public void setRendim(float rendim) {
        this.rendim = rendim;
    }
}



