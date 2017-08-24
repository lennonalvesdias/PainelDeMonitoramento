import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { CookieService } from 'ng2-cookies';

import { Login } from './auth.interface';

declare var notificacao: any;

@Injectable()
export class AuthService {

    public usuarioLogadoEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _autenticacao = null;
    private _autenticado = null;
    private _urlBase;

    constructor(
        private _rota: Router,
        private _http: Http,
        public cookieService: CookieService
    ) {
        this.montarUrl('');

        const expires = this.cookieService.get('Expires');
        if (new Date() >= new Date(expires)) {
            this.cookieService.deleteAll();
        }

        if (this.cookieService.check('AccessToken')) {
            this._autenticado = true;
            this.usuarioLogado(true);
            this._rota.navigate(['/']);
        }
    }

    montarUrl(local: string) {
        switch (local) {
            case 'externo':
                this._urlBase = 'http://api.connectparts.com.br:8014/';
                break;
            default:
                this._urlBase = 'http://api.dakotaparts.com.br/';
                break;
        }
    }

    entrar(login: Login) {
        this.setToken(login);
    }

    sair() {
        this.cookieService.deleteAll();
        this._autenticado = false;
        this.usuarioLogado(false);
        this._rota.navigate(['/login']);
    }

    usuarioAutenticado() {
        return this._autenticado;
    }

    private usuarioLogado(ifShow: boolean) {
        this.usuarioLogadoEmitter.emit(ifShow);
    }

    setToken(login: Login) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const params = new URLSearchParams();
        params.set('username', login.usuario);
        params.set('password', login.senha);

        const options = new RequestOptions({ headers: headers, params: params });

        this._http.get(`${this._urlBase}OAuth/Token`, options)
            .map(res => res)
            .subscribe(
            data => {
                const resposta = data.json();
                this.cookieService.set('AccessToken', resposta.access_token);
                this.cookieService.set('TokenType', resposta.token_type);
                this.cookieService.set('ExpiresIn', resposta.expires_in);
                this.cookieService.set('UserId', resposta.user_id);
                this.cookieService.set('UserName', resposta.user_name);
                this.cookieService.set('UserMail', resposta.user_mail);
                this.cookieService.set('Issued', resposta['.issued']);
                this.cookieService.set('Expires', resposta['.expires']);
                this._autenticado = true;
                this.usuarioLogado(true);
                this._rota.navigate(['/']);
            },
            error => {
                notificacao.mostrar('top', 'right', 'danger', 'Erro de usuário / senha.');
                this._autenticado = false;
            }
        );
    }
}
