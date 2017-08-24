import { Observable } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';

import { RestClientService } from './rest-client.service';

@Injectable()
export class SharedService {

  private _urlBase: string;

  private config

  constructor(
    private _rest: RestClientService
  ) { }

  // tslint:disable-next-line:member-ordering
  emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  // tslint:disable-next-line:member-ordering
  listaDeEventos(nomeEvento: string): EventEmitter<any> {
    // tslint:disable-next-line:curly
    if (!this.emitters[nomeEvento])
      this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
  }

}
