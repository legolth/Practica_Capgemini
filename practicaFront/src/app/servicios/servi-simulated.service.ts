import { Injectable } from '@angular/core';
import { EntradaModel } from '../model/entrada-model';
import { ResultModel } from '../model/result-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResumenModel } from '../model/resumen-model';


@Injectable({
  providedIn: 'root'
})
export class ServiSimulatedService {

  //dataInfo: EventEmitter<EntradaModel> = new EventEmitter<EntradaModel>();  
  private baseURL = "http://localhost:8080/v1/api/simulated";

  constructor(private httpCliente:HttpClient) { }

    obtenerSimulacion(entrada:EntradaModel):Observable<any>{
    return this.httpCliente.post<ResultModel>(this.baseURL,entrada);
  }

}
