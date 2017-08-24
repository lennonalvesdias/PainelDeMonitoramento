import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.scss']
})
export class ExternosComponent implements OnInit {

    private _listaPaineis: object = [
      {
        Nome: 'VTEX',
        Tempo: '10ms',
        DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
        Icone: 'sentiment_very_dissatisfied'
      },
      {
        Nome: '00K',
        Tempo: '10ms',
        DataAtualizacao: '2017-03-28T09:39:38.253-03:00',
        Icone: 'sentiment_neutral'
      },
      {
        Nome: 'DTS',
        Tempo: '10ms',
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
