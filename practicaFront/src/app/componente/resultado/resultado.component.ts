import { Component , Input, OnChanges, SimpleChanges} from '@angular/core';
import { EntradaModel } from 'src/app/model/entrada-model';
import { ResumenModel } from 'src/app/model/resumen-model';
import { ServiSimulatedService } from 'src/app/servicios/servi-simulated.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})

export class ResultadoComponent implements OnChanges {
  @Input() infoResult : EntradaModel 
  infoConf?: EntradaModel;
  resumen: ResumenModel = new ResumenModel; 
  datos: any [] = []; 
  info: EntradaModel = new EntradaModel();
  displayedColumns: string[] = ['anio', 'salIni', 'aport', 'rendim','salFinal'];
  dataSource:any;

  constructor(private serviSimulatedService:ServiSimulatedService){}

ngOnChanges(changes: SimpleChanges): void {  
 if(changes['infoResult']){
  this.mostrarResultado(this.infoResult);
 }
}

  private mostrarResultado(inf:EntradaModel){

    this.infoConf = inf;
    this.datos = []; 
    this.serviSimulatedService.obtenerSimulacion(this.infoConf).subscribe(data =>{
      console.log(data);
      this.resumen = data;
      this.datos.push(data); 
    
    })
    
  this.dataSource = new MatTableDataSource<EntradaModel>(this.datos); 
   
  }

  

}
