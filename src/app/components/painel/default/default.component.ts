import { RestClientService } from './../../../shared/services/rest-client.service';
import { ApiConfigModel } from './../../../shared/classes/api-config-model';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'painel-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  private _painel;

  private _intervalo = Observable.timer(0, 60000);

  private _config: ApiConfigModel = {
    Debug: false,
    Prefixo: '',
    UrlDebug: 'http://localhost:53236'
  }

  @Input() tipoFila;

  constructor(
    private _rest: RestClientService
  ) {
  }

  ngOnInit() {
    console.log('init:' + this.tipoFila);
    switch (this.tipoFila) {
      case 'preco':
        this.carregarFila('/Fenix/FilasIntegracao/StatusFilaPreco');
        return;
      case 'produto':
        this.carregarFila('/Fenix/FilasIntegracao/StatusFilaProduto');
        return;
      case 'estoque':
        this.carregarFila('/Fenix/FilasIntegracao/StatusFilaEstoque');
        return;
      case 'statuspedido':
        this.carregarFila('/Fenix/FilasIntegracao/StatusFilaStatusPedido');
        return;
      case 'integracaovtex':
        this.carregarFila('/Integracoes/Pedido/ObterFiladePedidosVtex');
        return;
      default:
        return;
    }
  }

  carregarFila(segmento: string) {
    const getTemp = this._intervalo.switchMap(() => this._rest.get(this._config, segmento));
    const precos = getTemp.subscribe(data => this._painel = data);
  }

  get painel() {
    return this._painel;
  }

}
