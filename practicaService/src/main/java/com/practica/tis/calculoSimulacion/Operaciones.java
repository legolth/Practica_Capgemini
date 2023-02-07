package com.practica.tis.calculoSimulacion;

import com.practica.tis.entityObject.EntradaModel;
import com.practica.tis.entityObject.ResultModel;
import com.practica.tis.entityObject.ResumenModel;

import java.util.ArrayList;
import java.util.List;

public class Operaciones implements OpeSimulacion {
    float aportaciones = 0;
    int numRegistros = 0;
    float ganancia = 0;
    float gananciaNeta = 0;

    @Override
    public ResumenModel iniSimulacion(EntradaModel p) {

        List<ResultModel> listResult = new ArrayList<>();
        ResumenModel resumen = new ResumenModel();

        for (int i = 0; i < p.getAnioInv(); i++ ){
            ResultModel  result = new ResultModel();
            result.setAnio(i+1);
            if(i == 0){
              result.setSalIni(p.getInvIni());
              result.setAport(p.getAportA());
            }
            else {
                int regAnterior = i-1;
                result.setSalIni(listResult.get(regAnterior).getSalFinal());
                result.setAport((listResult.get(regAnterior).getAport())*(1 + (p.getPincrPA()/100)));
            }
            float porcentaje = (p.getRendim()/100);
            float aporta = result.getSalIni()+result.getAport();
            float rendi = (aporta * porcentaje);
            float sFinal = (result.getSalIni() + result.getAport() + rendi);

            result.setRendim(rendi);
            result.setSalFinal(sFinal);

            listResult.add(result);
        }

        numRegistros = listResult.size();
        for (int j = 0; j < numRegistros ; j++){
            aportaciones = aportaciones + listResult.get(j).getAport();
        }
        int valorMaximo = numRegistros-1;
        float montoFinal = listResult.get(valorMaximo).getSalFinal();
        ganancia = listResult.get(0).getSalIni() + aportaciones ;
        gananciaNeta = montoFinal - ganancia;

        resumen.setGanInversion(gananciaNeta);
        resumen.setMontoFinal(montoFinal);
        resumen.setResultados(listResult);


        return resumen;
    }
}
