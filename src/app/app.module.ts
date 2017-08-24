import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { LoginModule } from './login/login.module';
import { PainelModule } from './painel/painel.module';

import { AuthGuard } from './auth/auth.guard';

import { CookieService } from 'ng2-cookies';
import { AuthService } from './auth/auth.service';
import { RestClientService } from './compartilhado/services/rest-client.service';
import { SharedService } from './compartilhado/services/shared.service';

import { aplicacaoRoteamento } from './app.routing';

import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PainelModule,
    LoginModule,
    CompartilhadoModule,
    aplicacaoRoteamento,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    AuthGuard,
    AuthService,
    SharedService,
    RestClientService,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
