import { SharedModule } from './shared/shared.module';
import { RestClientService } from './shared/services/rest-client.service';
import { SharedService } from './shared/services/shared.service';
import { aplicacaoRotas } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';

import { AuthGuard } from './auth/auth.guard';

import { CookieService } from 'ng2-cookies';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SharedModule,
    RouterModule.forRoot(aplicacaoRotas, {useHash: true})
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
