package com.practica.tis.controllers;

import com.practica.tis.calculoSimulacion.Operaciones;
import com.practica.tis.entityObject.EntradaModel;
import com.practica.tis.entityObject.ResumenModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/simulated")
@CrossOrigin(origins = "http://localhost:4200")
public class simulatedController {
@PostMapping
    public ResumenModel iniSimulated(@RequestBody EntradaModel entradaModel){
           Operaciones simulate = new Operaciones();
    return simulate.iniSimulacion(entradaModel);

}

}
