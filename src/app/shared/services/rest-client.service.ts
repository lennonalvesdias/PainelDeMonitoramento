import { CookieService } from 'ng2-cookies';
import { ApiConfigModel } from './../classes/api-config-model';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import * as Constants from './../constantes';

@Injectable()
export class RestClientService {

  private _headers = new Headers();

  constructor(
    private _http: Http,
    private _rota: Router,
    private _cookieService: CookieService
  ) {
    this._headers.set('Content-Type', 'application/json');
  }

  montarRequisicao(config: ApiConfigModel, segmento: string, headers: Map<string, string>, autentication: boolean) {
    if (headers != null) {
      this.gerarHeaders(headers);
    }

    if (autentication === true) {
      this._headers.set('Authorization', this.autenticacao);
    }

    if (config.Debug) {
      return config.UrlDebug + segmento;
    }

    return Constants.API_BASE_URL + config.Prefixo + segmento;
  }

  gerarHeaders(headers: Map<string, string>) {
    headers.forEach((value: string, key: string) => {
      this._headers.set(key, value);
    });
  }

  // tslint:disable-next-line:max-line-length
  get(config: ApiConfigModel, segmento: string = null, params: URLSearchParams = null, headers: Map<string, string> = null, autentication: boolean = true) {
    const url = this.montarRequisicao(config, segmento, headers, autentication);
    return this._http.get(url, { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  // tslint:disable-next-line:max-line-length
  post(config: ApiConfigModel, segmento: string = null, body: any, params: URLSearchParams = null, headers: Map<string, string> = null, autentication: boolean = true) {
    const url = this.montarRequisicao(config, segmento, headers, autentication);
    return this._http.post(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  // tslint:disable-next-line:max-line-length
  put(config: ApiConfigModel, segmento: string = null, body: any, params: URLSearchParams = null, headers: Map<string, string> = null, autentication: boolean = true) {
    const url = this.montarRequisicao(config, segmento, headers, autentication);
    return this._http.put(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  // tslint:disable-next-line:max-line-length
  patch(config: ApiConfigModel, segmento: string = null, body: any, params: URLSearchParams = null, headers: Map<string, string> = null, autentication: boolean = true) {
    const url = this.montarRequisicao(config, segmento, headers, autentication);
    return this._http.patch(url, JSON.stringify(body), { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  // tslint:disable-next-line:max-line-length
  delete(config: ApiConfigModel, segmento: string = null, params: URLSearchParams = null, headers: Map<string, string> = null, autentication: boolean = true) {
    const url = this.montarRequisicao(config, segmento, headers, autentication);
    return this._http.delete(url, { headers: this._headers, search: params })
      .map((res: Response) => res.json());
  }

  private get autenticacao() {
    return `${this._cookieService.get('TokenType')} ${this._cookieService.get('AccessToken')}`;
  }

}
