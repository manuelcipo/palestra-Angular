import {Component , OnInit} from '@angular/core';
import {Allenamento} from "../model/allenamento.model";
import {SharedService} from "../lista-allenamento.service";


@Component({
  selector: 'app-allenamento-form',
  templateUrl: './allenamento-form.component.html',
  styleUrls: ['./allenamento-form.component.scss']
})


export class AllenamentoFormComponent implements OnInit{

  listaAllenamenti?:Allenamento[];
  tipoOptions:string[]=["petto","gambe","bicipiti","dorso"];
  exerciseOptions:string[]=["squat","stacco","panca piana","croci","dip"];


  constructor(private data: SharedService) {
  }



  aggiungi(tipo:string, exercise:string, rep:any,serie:any){
    if(tipo!=undefined && exercise!=undefined){
    this.listaAllenamenti?.push(new Allenamento(tipo,serie,rep,exercise))}
  }


  ngOnInit(): void {
    this.data.allenamento.subscribe(lista => this.listaAllenamenti=lista)
  }

}
