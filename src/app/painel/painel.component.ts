import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  private _notificacoes: Array<string> = [];

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  sair() {
    this._authService.sair();
  }

  get notificacoes() {
    return this._notificacoes;
  }

}
