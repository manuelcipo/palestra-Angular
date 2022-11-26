
export class Allenamento{
  tipo?:string;
  numeroSerie?:number;
  numeroRipetizioni?:number;
  nome?:string;
  tempoRecupero?:number;


  constructor(tipo?:string, numeroSerie?:number,numeroRipetizioni?:number,nome?:string) {
    this.tipo=tipo;
    this.nome=nome;
    this.numeroSerie=numeroSerie;
    this.numeroRipetizioni=numeroRipetizioni;
  }
}
