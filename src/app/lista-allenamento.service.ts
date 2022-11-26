import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Allenamento} from "./model/allenamento.model";

@Injectable()
export class SharedService {

  private  listallenamentoSource=new BehaviorSubject<Allenamento[]>( []);
  allenamento=this.listallenamentoSource.asObservable();

  constructor() {
  }

  aggiungi(lista:[]){
    this.listallenamentoSource.next(lista);
  }
}
