import { Component,  Input,  OnChanges, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EntradaModel } from 'src/app/model/entrada-model';
import { ServiSimulatedService } from 'src/app/servicios/servi-simulated.service';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})

export class EntradaComponent implements OnChanges  {
  @Input() infoConfi : EntradaModel 
  infoConf?: EntradaModel;
  datos: EntradaModel [] = []; 
  displayedColumns: string[] = ['invIni', 'aportA', 'pincrPA', 'anioInv','rendim'];
  dataSource:any;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
  
    if(changes['infoConfi']){
      this.onInfoUpdate(this.infoConfi);
    }

  }

    onInfoUpdate(inf:EntradaModel){   
      this.infoConf = inf;
      this.datos = []; 
      this.datos.push(this.infoConf);
      this.dataSource = new MatTableDataSource<EntradaModel>(this.datos);
   
    }


  }

