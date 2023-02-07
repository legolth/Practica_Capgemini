import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { EntradaModel } from 'src/app/model/entrada-model';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  @Output() infoUpdate : EventEmitter<EntradaModel>;
  exception : string ;
  info: EntradaModel = new EntradaModel(); 
  constructor() { 
  this.infoUpdate = new EventEmitter();

  }

  ngOnInit(): void {
 
  }

  starSimulated(){
  this.exception = "";
  this.info.aportA = this.info.aportA == undefined || this.info.aportA < 0 ? 0 : this.info.aportA 
  this.info.pincrPA = this.info.pincrPA == undefined || this.info.pincrPA < 0 ? 0 : this.info.pincrPA 
  console.log(this.info);

  if(this.info.invIni < 1000 || this.info.invIni == undefined){
    this.info.invIni = 0;
    this.exception = " La inversion minima debe de ser por lo menos de $1000 ";
    return;
  }

 
  if(this.info.pincrPA > 100){
    this.info.pincrPA = 0;
    this.exception = " no puedes asignar mas el 100% De incremento a la aportación anual";
    return;
  } 
 
  if(this.info.anioInv == undefined || this.info.anioInv <= 0){
    this.info.anioInv = 0;
    this.exception = " debe de presentar almenos 1 año de inversion";
    return;
  }
  
  if(this.info.rendim == undefined || this.info.rendim < 0){
    this.info.rendim = 0;
    this.exception = " debe de presentar almenos el 1 % de Rendimiento";
    return;
  }
  
  if(this.info.rendim > 100){
    this.info.rendim = 0;
    this.exception = " no puedes asignar mas el 100%  de Rendimiento";
    return;
  }

  this.infoUpdate.emit(this.info);

  }

  cleanInfo(){
   this.exception = "";
   this.info = new EntradaModel(); 
   this.infoUpdate.emit(this.info);
  }

}

