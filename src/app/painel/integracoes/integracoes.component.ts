import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import { ApiConfigModel } from './../../compartilhado/classes/api-config-model';

import { RestClientService } from '../../compartilhado/services/rest-client.service';

@Component({
  selector: 'app-integracoes',
  templateUrl: './integracoes.component.html',
  styleUrls: ['./integracoes.component.scss']
})
export class IntegracoesComponent implements OnInit {

  private _intervalo = Observable.timer(0, 60000);

  private _listaPaineis: object = [];

  private _config: ApiConfigModel = {
    Debug: false,
    Prefixo: '/Fenix',
    UrlDebug: 'http://localhost:53236'
  }

  constructor(
    private _rest: RestClientService
  ) { }

  ngOnInit() {
    this.filaPrecos();
    this.filaProdutos();
    this.filaEstoque();
    this.filaStatusPedido();
  }

  filaPrecos() {
    const segmento = '/FilasIntegracao/StatusFilaPreco';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const precos = getTemp.subscribe(data => this._listaPaineis[0] = data);
  }

  filaProdutos() {
    const segmento = '/FilasIntegracao/StatusFilaProduto';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const produtos = getTemp.subscribe(data => this._listaPaineis[1] = data);
  }

  filaEstoque() {
    const segmento = '/FilasIntegracao/StatusFilaEstoque';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const produtos = getTemp.subscribe(data => this._listaPaineis[2] = data);
  }

  filaStatusPedido() {
    const segmento = '/FilasIntegracao/StatusFilaStatusPedido';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const produtos = getTemp.subscribe(data => this._listaPaineis[3] = data);
  }

  get listaPaineis() {
    return this._listaPaineis;
  }

}
