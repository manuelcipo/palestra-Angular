import {Component , OnInit} from '@angular/core';
import {Allenamento} from "../model/allenamento.model";
import {BehaviorSubject} from "rxjs";
import {SharedService} from "../lista-allenamento.service";


@Component({
  selector: 'app-allenamento-form',
  templateUrl: './allenamento-form.component.html',
  styleUrls: ['./allenamento-form.component.scss']
})


export class AllenamentoFormComponent implements OnInit{

  listaAllenamenti?:Allenamento[];
  selectedType:string;
  selectedExcercise:string;
  tipoOptions:string[]=["petto","gambe","bicipiti","dorso"];
  exerciseOptions:string[]=["squat","stacco","panca piana","croci","dip"];


  constructor(private data: SharedService) {
    this.selectedType="";
    this.selectedExcercise="";
  }



  aggiungi(tipo:string, exercise:string, rep:any,serie:any):boolean{
    if(tipo!="" && exercise!=""){
    this.listaAllenamenti?.push(new Allenamento(tipo,serie,rep,exercise))}
    console.log(exercise);
    console.log(this.selectedExcercise)
    return false;
  }

  setSelectedType(type:string){
    this.selectedType=type;
  }

  setSelectedExcercise(type:string){
    this.selectedExcercise=type;
  }

  ngOnInit(): void {
    this.data.allenamento.subscribe(lista => this.listaAllenamenti=lista)
  }

}
