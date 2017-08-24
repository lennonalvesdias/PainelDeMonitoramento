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

  private _qtdPrecos: number;
  private _qtdProdutos: number;

  private _intervalo = Observable.timer(0, 5000);

  private _config: ApiConfigModel = {
    Debug: false,
    Prefixo: '/Fenix',
    UrlDebug: 'http://localhost:53236'
  }

  constructor(
    private _rest: RestClientService
  ) { }

  ngOnInit() {
    this.contarPrecos();
    this.contarProdutos();
  }

  contarPrecos() {
    const segmento = '/FilasIntegracao/ContarFilaPrecos';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const precos = getTemp.subscribe(data => this._qtdPrecos = data.Total);
  }

  contarProdutos() {
    const segmento = '/FilasIntegracao/ContarFilaProdutos';
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const produtos = getTemp.subscribe(data => this._qtdProdutos = data.Total);
  }

  get precos() {
    return this._qtdPrecos;
  }

  get produtos() {
    return this._qtdProdutos;
  }

  get dataAtual() {
    return Date.now();
  }

}
