import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  private _notificacoes: Array<string> = ['Exemplo de Alerta 1', 'Exemplo de Alerta 2'];

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
