import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  private _listaPaineis: object = [
    {
      Nome: 'Fenix',
      Tempo: '10ms',
      DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
      Icone: 'sentiment_neutral'
    },
    {
      Nome: 'Pré Análise',
      Tempo: '10ms',
      DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
      Icone: 'sentiment_very_dissatisfied'
    },
    {
      Nome: 'Frete',
      Tempo: '10ms',
      DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
      Icone: 'sentiment_very_satisfied'
    },
    {
      Nome: 'Boleto',
      Tempo: '',
      DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
      Icone: 'sentiment_very_satisfied'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  get listaPaineis() {
    return this._listaPaineis;
  }

  verificaSucesso(data) {
    if (data < Date.now()) {
      return 'error'
    } else {
      return 'check_circle'
    }
  }

}
