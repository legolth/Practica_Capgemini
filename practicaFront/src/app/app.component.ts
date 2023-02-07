import { Component, Input ,Output , EventEmitter} from '@angular/core';
import { EntradaModel } from './model/entrada-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() infoUpdate : EventEmitter<EntradaModel>;
  title = 'The Investor School (TIS)';
  infoListener : EntradaModel = new EntradaModel; 


  infEntrada(env:any){
    console.log(env);
    this.infoListener = env;
  }

}



