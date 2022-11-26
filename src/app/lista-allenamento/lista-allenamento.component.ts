import {Component, OnInit} from '@angular/core';
import {Allenamento} from "../model/allenamento.model";
import {SharedService} from "../lista-allenamento.service";

@Component({
  selector: 'app-lista-allenamento',
  templateUrl: './lista-allenamento.component.html',
  styleUrls: ['./lista-allenamento.component.scss']
})
export class ListaAllenamentoComponent implements OnInit{

  listaAllenamenti?:Allenamento[];

  constructor(private data: SharedService) {

  }



  ngOnInit(): void {
    this.data.allenamento.subscribe(lista => this.listaAllenamenti=lista)
  }

}
