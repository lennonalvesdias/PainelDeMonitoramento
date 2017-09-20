import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _notificacoes: Array<string> = [];

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
  }

  sair() {
    this._auth.sair();
  }

  get notificacoes() {
    return this._notificacoes;
  }

}
